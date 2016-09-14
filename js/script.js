$(function() {
  function moveAndShow(selector, opts, dur, finished) {
    selector.css('opacity', 0);
    selector.animate(opts, dur, function() {
        selector.animate({
          'opacity': 1
        }, dur, finished)
    });
  }
  var dur = 1000;
  var [l, s, c] = [$('#logo'), $('#comingsoon'), $('#contact')];
  if (!Modernizr.localstorage || localStorage.getItem('animated')) {
    $('#logo,#comingsoon').show();
    c.css('opacity', 1);
  } else {
    localStorage.setItem('animated', true);
    l.fadeIn(dur, function() {
      moveAndShow(s, {width: 'toggle'}, dur, function() {
        c.animate({
            "opacity": 1
        });
      });
    });
  }
});
