'use-strict'

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://www.shred.sk/category/slovak/")

    // // valuet from page
    // const grabParagraph = await page.evaluate(() => {

    //     // selector
    //     const pgTag = document.querySelectorAll('.td-block-span6');

    //     // loop example for all
    //     let technologies = [];
    //     pgTag.forEach((tag) => {
    //         technologies.push(tag.innerText);
    //     })
    //     return technologies;
    // })
     // valuet from page

     // GRAB POST INFORMATION FROM PAGE
     const grabPost = await page.evaluate(() => {
        const postTag = document.querySelectorAll('.td_module_10')
       
        let posts = []
        postTag.forEach((post) => {
            const titlePost = post.querySelector('h3 a');
            const contentPost = post.querySelectorAll('.td-module-meta-info span')
            const authorPost = contentPost[0]
            const datePost =  contentPost[2]

            posts.push({ 
                title: titlePost.innerText, 
                author: authorPost.innerText, 
                date: datePost.innerText 
            })
        })
        return posts
    })
    console.log(grabPost)
    await browser.close()
})();