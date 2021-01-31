const CleanCSS = require("clean-css");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const smartquotes = require("smartquotes");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("smartquotes", function(text) {
    // Undo any previous transformation of " to &quot;
    var newtext = text.replace(/&quot;/g, "\"");
    return smartquotes.string(newtext);
  });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("favicon.ico"); 
};

