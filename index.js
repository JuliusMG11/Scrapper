'use-strict'

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://opencnft.io/")

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
        const postTag = document.querySelectorAll('tr')
       
        let posts = []
        postTag.forEach((post) => {
            const titleProject = post.querySelector('.Cell div span');
            // const floorPrice = post.querySelectorAll('.Cell div')
            // const price = floorPrice[0]
            // const state =  floorPrice[1]

            posts.push({ 
                title: titleProject.innerText, 
                // price: price.innerText, 
                // state: state.innerText 
            })
        })
        return posts
    })
    console.log(grabPost)
    await browser.close()
})();