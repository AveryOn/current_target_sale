const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss";
          @import "@/styles/media/media__main.scss";
        `
      }
    }
  }
})
