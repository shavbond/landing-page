"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialPageAnimation = function initialPageAnimation() {
  var timeline = gsap.timeline();
  timeline.fromTo('.info-section h1', {
    x: 0,
    y: 100,
    opacity: 0
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: .6,
    duration: 1.3
  }).fromTo('.logo', {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .6,
    duration: 1.3
  }).fromTo('.menu', {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .6,
    duration: 1.3
  }, ">-2").fromTo('.girl', {
    height: 0,
    opacity: 0
  }, {
    opacity: 1,
    height: 600,
    duration: 1.4,
    ease: "power2.inout"
  }).fromTo('.boy', {
    height: 0,
    opacity: 0
  }, {
    opacity: 1,
    height: 500,
    duration: 1.4,
    ease: "power2.inout"
  }, ">-2").fromTo('.shape1', {
    scale: .1,
    opacity: 0
  }, {
    y: -50,
    opacity: 1,
    scale: 1,
    duration: 1.4,
    ease: "power2.inout"
  }).fromTo('.shape3', {
    scale: .3,
    opacity: 0
  }, {
    y: 420,
    opacity: .5,
    scale: 1,
    duration: .8,
    ease: "power2.inout"
  }, ">-2.4").fromTo('.shape2', {
    scale: .3,
    y: -100,
    opacity: 0
  }, {
    y: -135,
    opacity: .5,
    scale: 1,
    duration: .7,
    ease: "power2.inout"
  }, ">-1.2").fromTo('.info-section h4', {
    x: 0,
    y: 100,
    opacity: 0
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: .6,
    duration: 1.3
  }).fromTo('.call-actions', {
    x: 0,
    y: 100,
    opacity: 0
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: .6,
    duration: 1.3
  }, "h1Show+=.6");
};

initialPageAnimation();

var delay = function delay(n) {
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
};

var loadingEnter = function loadingEnter() {
  var timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: 0
  }, {
    y: "100%",
    duration: 2
  });
};

var loadingLeave = function loadingLeave() {
  var timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: "100%"
  }, {
    y: 0
  });
};

var galleryEnter = function galleryEnter() {
  var timeline = gsap.timeline();
  timeline.fromTo('white-bg', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.3,
    ease: "power1.inOut"
  }).fromTo('.white-bg ul li', {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: .3,
    ease: 'power1.inOut',
    stagger: 0.3
  });
};

barba.init({
  sync: true,
  transitions: [{
    name: 'page-swipe',
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              done = this.async();
              console.log('Leaving Animation');
              loadingLeave();
              _context.next = 5;
              return regeneratorRuntime.awrap(delay(1000));

            case 5:
              done();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loadingEnter();
              initialPageAnimation();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    once: function once(data) {
      return regeneratorRuntime.async(function once$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              initialPageAnimation();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    name: 'gallery-transition',
    from: {
      namespace: ['home', 'about']
    },
    to: {
      namespace: ['gallery']
    },
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              done = this.async();
              loadingLeave();
              _context4.next = 4;
              return regeneratorRuntime.awrap(delay(1000));

            case 4:
              done();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              loadingEnter();
              galleryEnter();

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      });
    },
    once: function once(data) {
      return regeneratorRuntime.async(function once$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              initialPageAnimation();

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }],
  views: [(_ref = {
    namespace: 'about',
    afterEnter: function afterEnter(data) {
      // do something before entering the `about` namespace
      loadingEnter();
    }
  }, _defineProperty(_ref, "namespace", 'gallery'), _defineProperty(_ref, "afterEnter", function afterEnter(data) {
    // do something before entering the `gallery` namespace
    loadingEnter();
    galleryEnter();
  }), _ref)]
});
galleryEnter();
initialPageAnimation();