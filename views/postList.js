module.exports = (posts) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Marvel Heroes</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="/styles.css"/>
        </head>
        <body>
            <div id="container">
                 <a href="/">SUPER</a>
                <a href="/">HEROES</a>
            </div>
            <div class="list">
                ${posts.map(post => {
                    const html = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img" src="${post.image}" class="card-img-top" alt="${post.name}">
                        <div class="card-body">
                            <h5 class="card-title">${post.name}</h5>
                            <p class="card-text">${post.content.split(" ").slice(0,10).join(" ")}...</p>
                            <a href="/posts/${post.id}" class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                    `
                    return html
                }).join("")}
            </div>
        </body>
    </html>
    `
}




{/* <div id="linkBack" style="position:absolute;right:0px;top:0px;background-color:#333;margin:0;width:60px;padding:5px"><a href="https://rilling.dev/projects/" target="_blank" style="font-size:14px;text-decoration:none;color:#fff;padding:0 0 0 5px;font-family:sans-serif">My Site</a></div> */}