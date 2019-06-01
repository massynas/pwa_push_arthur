module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/pwa_push_arthur/' : '/',

    pwa: {
        workboxPluginModde: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/sw.js',
            swDest: 'service-worker.js',
            importWorkboxFrom: 'local'
        }
    }
}