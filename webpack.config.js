var path = require('paht')  // 引入操作路径模块

module.exports = {
  // 输入文件
  entry: './src/main.js',
  output: {
    // 输出目录
    path: path.resolve(__dirname, './dist'),
    // 静态目录,从这里取文件
    publicPath: '/dist/',
    // 文件名
    filename: 'index.js'
  },
  module: {
    rules: [
      //解析vue后缀文件
      {test: /\.vue$/, loader: 'vue-loader'},
      //用巴babel解析js文件 排除模块安装目录的文件
      {test: /\.js$/, loader: 'babel-loader',exclude: /node_modules/}
    ]
  }
}
