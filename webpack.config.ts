import { resolve, join } from 'path';
import { ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  devServer: {
    static: {
      directory: join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    client: {
      progress: true,
      reconnect: 5,
    },
    hot: true,
    open: true,
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  mode: 'development',
};
