const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js dosyaları için Babel kullan
        exclude: /node_modules/, // node_modules dışındaki dosyalar işlenecek
        use: {
          loader: "babel-loader", // Babel'ı kullanarak dosyaları işleyin
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // React ve ES6+ için Babel preset'leri
          },
        },
      },
      {
        test: /\.css$/, // CSS dosyalarını işlemek için
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
