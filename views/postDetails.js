module.exports = (post) => {
    if (!post.id) {
        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Marvel Heroes</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                    <link rel="stylesheet" href="/styles.css"/>
                </head>
                <body>
                    <div id="container">
                        <a href="/">SUPER</a>
                        <a href="/">HEROES</a>
                     </div>
                    <div class="not-found">
                        <h2>Page Not Found</h2>
                        <img src="/404.jpg" />
                    </div>
                </body>
            </html>
        `
        return html;
    } else {
        const html = `
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
                    <div class="div-detail">
                        <div class="div-img"><img src="${post.image}"></div>
                        <h2>${post.name}</h2>
                        <div class="div-content">
                        <p>${post.power}</p>
                        <p>${post.content}</p>
                        </div>
                    </div>
                </body>
            </html>
        `;
        return html;
    }  
}