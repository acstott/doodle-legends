const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
      clean: true,
    },
    mode: isProduction ? "production" : "development",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@game": path.resolve(__dirname, "src/game/"),
        "@store": path.resolve(__dirname, "src/store/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
        "@utils": path.resolve(__dirname, "src/utils/")
      },
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: true,
                  localIdentName: isProduction
                    ? "[hash:base64]"
                    : "[path][name]__[local]",
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
          generator: {
            filename: "assets/[hash][ext][query]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: isProduction ? "[name].[contenthash].css" : "[name].css",
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isProduction ? "static" : "server", // Static file for production, live server for dev
        openAnalyzer: !isProduction, // Automatically open in the browser during development
      }),
    ],
    devServer: {
      static: path.join(__dirname, "public"),
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
