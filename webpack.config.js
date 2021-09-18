const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (env) => {
  const devMode = !env || !env.production
  const site = env.SITE
  // const django = env.DJANGO
  // const proxyPort = env.PROXY

  return {
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
      })/* ,
      ...(django || proxyPort
        ? [
            new BrowserSyncPlugin({
              // browse to http://localhost:3000/ during development,
              // ./public directory is being served
              cors: true,
              host: '127.0.0.1',
              port: 9900,
              // server: { baseDir: ['public'] },
              proxy: `http://localhost:${proxyPort ? proxyPort : 8000}/rodo/`,
            }),
          ]
        : []), */
    ],
  };
};
