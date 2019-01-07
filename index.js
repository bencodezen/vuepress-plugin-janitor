module.exports = (options, ctx) => {
    return {
        name: 'vuepress-plugin-janitor',

        // Purpose is to look over the build files and run them through some sort of filter that will modify the output in some fashion.
        async generated (pagePaths) {
            // First thing I try to do with anything is make sure something is working before diving too deep in the rabbit hole
            console.log(pagePaths)
        }
    }
}