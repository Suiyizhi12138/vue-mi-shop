
const path = require('path')

function resolve(dir){

  return path.join(__dirname,dir);
}


module.exports = {
  devServer: {
    proxy: {
      '/api':{
        target: 'http://mi-shop.test',
        changeOrgin: true
      },
      '/v3': {
        target: 'https://restapi.amap.com',
        changeOrgin: true,
        secure: false
      }
    }

  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve("src"))
      .set('pages',resolve("src/views"))
      .set('components',resolve("src/components"))
  }
}