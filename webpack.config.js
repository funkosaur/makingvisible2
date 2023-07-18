const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|csv)$/, // Compress JS and CSV files
      threshold: 10240, // Files larger than 10KB will be compressed
      minRatio: 0.8, // Only compress files with a compression ratio of at least 0.8 (80%)
    }),
    new BrotliPlugin({
      test: /\.(js|csv)$/, // Compress JS and CSV files
      threshold: 10240, // Files larger than 10KB will be compressed
      minRatio: 0.8, // Only compress files with a compression ratio of at least 0.8 (80%)
    }),
  ],
};
