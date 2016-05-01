// Ported from a jquery version Chris Coyier & tweaked by Mathias Bynens
// https://css-tricks.com/fluid-width-youtube-videos/

window.addEventListener('load', function() {
  var fluidEl = document.querySelector(".content");
  var allVideos = Array.prototype.slice.call(fluidEl.querySelectorAll("iframe[src^='https://www.youtube.com']"));

  allVideos.forEach(function(e) {
    e.setAttribute("data-aspectRatio", e.height / e.width);
  });

  function getElementContentWidth(element) {
    var styles = window.getComputedStyle(element);
    var padding = parseFloat(styles.paddingLeft) +
                  parseFloat(styles.paddingRight);
    return element.clientWidth - padding;
  }
  var setSizes = function() {
    var newWidth = getElementContentWidth(fluidEl);
    allVideos.forEach(function(e) {
      e.width = newWidth;
      e.height = newWidth * e.getAttribute('data-aspectRatio');
    });

  };
  window.addEventListener("resize", setSizes);
  // Kick off one resize to fix all videos on page load
  setSizes()
  // fluidEl.addEventListener('mdl-componentupgraded', setSizes)

});
