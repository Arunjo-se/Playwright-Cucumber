module.exports = {
  default: {
    require: ["./steps/*.js"],        // where step definitions are
    paths: ["./features/*.feature"],  // where feature files are
    format: ["progress"],
  },
};
