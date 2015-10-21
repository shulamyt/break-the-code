({
    // reusing runtime requireJs config
    mainConfigFile: "./app/require-config.js",
    baseUrl: "app",
    // output directory for optimized project (build)
    dir: "./target",
    // do not include combined files in output directory, only the resulting files
    removeCombined: false,
    // minification and obfuscation
    optimize: 
    "none",
    // "uglify2"

    // modules to be optimized
    modules: [
        {
            name: 'main',
            exclude: ['questions/questionsController']
        },
        {
            name: 'questions/questionsController',
            exclude: ['app']
        },

    ]
})
