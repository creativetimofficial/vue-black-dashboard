const isProd = process.env.NODE_ENV === "production";
module.exports = {
  lintOnSave: false,
  baseUrl: isProd ? "/vue-black-dashboard/" : "",
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
