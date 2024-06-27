jQuery(document).ready(function () {
  jQuery("#rain").jPlayer({
    ready: function () {
      jQuery(this).jPlayer("setMedia", {
        m4a: "res/rainymood_audio1112.m4a",
        oga: "res/rainymood_audio1112.ogg",
      });
      var click = document.ontouchstart === undefined ? "click" : "touchstart";
      var kickoff = function () {
        jQuery("#jquery_jplayer_1").jPlayer("play");
        document.documentElement.removeEventListener(click, kickoff, true);
      };
      document.documentElement.addEventListener(click, kickoff, true);
    },
    playing: function () {},
    swfPath: "/js",
    loop: true,
    supplied: "m4a, oga",
    preload: "none",
    volume: 0.6,
  });
});
