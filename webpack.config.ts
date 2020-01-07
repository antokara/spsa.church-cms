import { config } from 'dotenv';
import * as Dotenv from 'dotenv-webpack';
import {
  Configuration,
  EnvironmentPlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
config();

module.exports = (env: NodeJS.ProcessEnv): Configuration => {
  const environment: string =
    env && env.NODE_ENV ? env.NODE_ENV.toLocaleLowerCase() : 'development';

  return {
    entry: ['webpack/hot/poll?100', './src/main.ts'],
    watch: true,
    target: 'node',
    externals: [
      nodeExternals({
        whitelist: ['webpack/hot/poll?100'],
      }),
    ],
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: 'development',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new EnvironmentPlugin({
        NODE_ENV: environment,
        DEBUG: false,
      }),
      new Dotenv({
        path: path.resolve(__dirname, '.env'),
        safe: true,
        systemvars: true,
        silent: true,
      }),
      new HotModuleReplacementPlugin(),
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
    },
  };
};
