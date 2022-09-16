function generateHtml(allTeamCardsStr) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./assets/css/reset.css">
        <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section>
            ${allTeamCardsStr}
            <!--dynamic content goes here-->
        </section>
       
    </body>
    </html>
    `
}

module.exports = generateHtml;