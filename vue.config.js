const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        $: 'jquery',
        moment: 'moment',
      }),
    ]
  }
}
