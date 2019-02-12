const isProd = process.env.NODE_ENV === "production";
module.exports = {
  lintOnSave: false,
  publicPath: isProd ? "/vue-black-dashboard/" : "",
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
