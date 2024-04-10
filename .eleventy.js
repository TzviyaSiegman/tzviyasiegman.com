module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/css');
  
    // Return your Object options:
    return {
      dir: {
        input: "src/",

        // relative to `input` above
        layouts: "_layouts"
      }
    }
  };