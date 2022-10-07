module.exports = {
  publicPath: "/vue-project/",
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"],
  },
};
