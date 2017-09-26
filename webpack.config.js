'use strict';

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';
const isExamples = nodeEnv === 'examples';

const plugins = [];

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }, {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'less-loader'
    }]
  }
];

if (isProduction) {
  plugins.push(
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  );
} else {
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html'
    })
  );
}

let config = {};
if (isExamples) {
  config = {
    devtool: 'eval-source-map',
    // Here the application starts executing
    // and webpack starts bundling
    entry: {
      'test': ['babel-polyfill', './examples/test/test.js']
    },
    // options related to how webpack emits results
    output: {
      // the filename template for entry chunks
      filename: '[name].js',
      // library: 'iscroll-react',
      // libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist/')
    },
    module: {
      // rules for modules (configure loaders, parser options, etc.)
      rules: rules
    },
    resolve: {
      // options for resolving module requests
      // (does not apply to resolving to loaders)
      modules: [path.resolve(__dirname, './'), 'node_modules']
    },
    // adding plugins to our configuration
    plugins,
    // devServer configuration
    devServer: {
      // Tell the server where to serve content from
      contentBase: path.join(__dirname, './public'),
      // Inline mode is recommended when using Hot Module Replacement.
      inline: true,
      // hot module replacement. Depends on HotModuleReplacementPlugin
      hot: false,
      // Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this:
      host: '0.0.0.0',
      // For some systems, watching many file systems can result in a lot of CPU or memory usage.
      // It is possible to exclude a huge folder like node_modules
      watchOptions: {
        ignored: /node_modules/,
      },
      // Enable gzip compression for everything served
      compress: true,
      // Specify a port number to listen for requests on
      port: 3000
    }
  };
} else {
  config = {
    devtool: false,
    // Here the application starts executing
    // and webpack starts bundling
    entry: {
      'react-iscroll': './src/ReactIScroll.js'
    },
    // options related to how webpack emits results
    output: {
      // the filename template for entry chunks
      filename: '[name].js',
      library: 'iscroll-react',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist/')
    },
    externals: ['react', 'prop-types'],
    module: {
      // rules for modules (configure loaders, parser options, etc.)
      rules: rules
    },
    resolve: {
      // options for resolving module requests
      // (does not apply to resolving to loaders)
      modules: [path.resolve(__dirname, './src'), 'node_modules']
    },
    // adding plugins to our configuration
    plugins,
    // devServer configuration
    devServer: {
      // Tell the server where to serve content from
      contentBase: path.join(__dirname, './public'),
      // Inline mode is recommended when using Hot Module Replacement.
      inline: true,
      // hot module replacement. Depends on HotModuleReplacementPlugin
      hot: false,
      // Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this:
      host: '0.0.0.0',
      // For some systems, watching many file systems can result in a lot of CPU or memory usage.
      // It is possible to exclude a huge folder like node_modules
      watchOptions: {
        ignored: /node_modules/,
      },
      // Enable gzip compression for everything served
      compress: true,
      // Specify a port number to listen for requests on
      port: 3000
    }
  };
}


module.exports = config;
