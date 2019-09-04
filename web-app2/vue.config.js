module.exports = {
    lintOnSave: false,
    // baseUrl: '',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8360',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': '/api'  // rewrite path
                }
            },
        },
        // proxy:'http://127.0.0.1:83600' 
    }
};