const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     // プリセットを指定することで、ES2020 を ES5 に変換
            //     '@babel/preset-env',
            //     // React の JSX を解釈
            //     '@babel/preset-react',
            //   ],
            // },
          },
        ],
      },
    ],
  },
  devServer: {
    //       サーバー起動時にブラウザを自動的に起動
    open: true,
    //       ポート番号
    port: 8080,
    //       コンテンツのルートディレクトリ(/public/index.htmlが読み込まれる)
    contentBase: './public',
  },
};
