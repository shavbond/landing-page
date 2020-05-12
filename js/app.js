/* Page transitions */

const initialPageAnimation = () => {

  let timeline = gsap.timeline()

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

})
.fromTo('.logo', {
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

   },
   ">-2"
)
.fromTo('.girl', {
  height: 0,
  opacity: 0

}, 
{
  opacity: 1,
  height: 600,
  duration: 1.4,
  ease: "power2.inout"
  },
)
.fromTo('.boy', {
  height: 0,
  opacity: 0

}, 
{
  opacity: 1,
  height: 500,
  duration: 1.4,
  ease: "power2.inout"
  },
  ">-2"
)
.fromTo('.shape1', {
  scale: .1,
  opacity: 0

}, 
{
  y: -50,
  opacity: 1,
  scale: 1,
  duration: 1.4,
  ease: "power2.inout"
  }
)
.fromTo('.shape3', {
  scale: .3,
  opacity: 0

}, 
{
  y: 420,
  opacity: .5,
  scale: 1,
  duration: .8,
  ease: "power2.inout"
  },
  ">-2.4"
)
.fromTo('.shape2', {
  scale: .3,
  y: -100,
  opacity: 0,
}, 
{


  y: -135,
  opacity: .5,
  scale: 1,
  duration: .7,
  ease: "power2.inout"
  },
  ">-1.2"
)
.fromTo('.info-section h4', {
  x: 0,
  y: 100,
  opacity: 0
}, {
  x: 0,
  y: 0,
  opacity: 1,
  delay: .6,
  duration: 1.3

})
.fromTo('.call-actions', {
  x: 0,
  y: 100,
  opacity: 0
}, {
  x: 0,
  y: 0,
  opacity: 1,
  delay: .6,
  duration: 1.3

},
"h1Show+=.6")
;

}


const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: 0
  }, {
    y: "100%",
    duration: 2
  })
}

const loadingLeave = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: "100%"
  }, {
    y: 0
  })
}

const galleryEnter = () => {
  let timeline = gsap.timeline();
  timeline.fromTo('white-bg', 
  {
    y: 50,
    opacity: 0,
  },
   {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.3,
    ease: "power1.inOut",
    
  })
  .fromTo(
    '.white-bg ul li', 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: .3,
      ease: 'power1.inOut',
      stagger: 0.3
    }
  )
}


galleryEnter();

initialPageAnimation();

barba.init({
  sync: true,
  transitions: [
    {
      name: 'page-swipe',
      async leave(data){
        const done = this.async();
        console.log('Leaving Animation');
        loadingLeave();
       await delay(1000);
        done();
      },
      async enter(data){
        loadingEnter();
        initialPageAnimation();
      },
      async once(data) {
        initialPageAnimation();
      }
    },
    {
      name: 'gallery-transition',
      from: {
        namespace: ['home', 'about']
      },
      to: {
        namespace: ['gallery']
      },

      async leave(data){
        const done = this.async();
        loadingLeave();
       await delay(1000);
        done();
      },
      async enter(data){
        loadingEnter();
        galleryEnter();
      },
      async once(data) {
        initialPageAnimation();
      }
    }
  ],
  views: [
    // {
  //   namespace: 'index',
  //   beforeLeave(data) {
  //     // do something before leaving the current `index` namespace
  //   }
  // }, 
    {
    namespace: 'about',
    afterEnter(data) {
      // do something before entering the `about` namespace
      loadingEnter();

    },
    
      namespace: 'gallery',
      afterEnter(data) {
        // do something before entering the `gallery` namespace
        loadingEnter();
        galleryEnter();
      },
    }]
})

/*Scroll Animations */

const tlServicesScroll = new gsap.timeline({
  
})


tlServicesScroll.fromTo('#main-services', {
  x: '100%',
}, {
  x: 0
})

const serviceElement = document.querySelector('#main-services');

let controller = new ScrollMagic.Controller();

let serviceScene = new ScrollMagic.Scene({
  triggerElement: '#main-services',
  triggerHook: 1,
  duration: 1000,
  reverse: false
})

.setTween(tlServicesScroll)
.addTo(controller)
.addIndicators()
