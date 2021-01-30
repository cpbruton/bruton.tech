const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("img");
 
};

