const fs = require('fs')

module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-janitor',

        generated () {
            ctx.pages.map(page => {
                const currentDateUTC = new Date().toUTCString()
                const currentDateISO = new Date(currentDateUTC).toISOString()

                if (page.frontmatter.date) {
                    const isFuturePost = page.frontmatter.date > currentDateISO

                    if (isFuturePost) {
                        fs.unlinkSync(ctx.outDir + page.path)

                        console.log(`♻️ Future Post: ${page.frontmatter.title} was removed from the build directory.`)
                    }
                }
            })
        }
    }
}