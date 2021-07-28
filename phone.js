
class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  backgroundToggler = false;
  shouldIgnoreVideo = false
  
  
}
  
  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
	