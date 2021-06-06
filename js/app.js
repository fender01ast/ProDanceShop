document.addEventListener( 'DOMContentLoaded', function () {
    let currentYear = new Date().getFullYear();
    document.getElementById('js-year').innerHTML = currentYear;

    let body = document.querySelector('body');
    let cityChooserButton = document.querySelector('.city-chooser');
    let cityChooserPopup = document.querySelector('.popup__city-chooser__wrapper');
    let cityChooserCloseBtn = document.querySelector('.popup__city-chooser__close');
    cityChooserButton.addEventListener( 'click', function(){
        cityChooserPopup.classList.add('clicked');
        body.classList.add('overflow');
    });
    cityChooserCloseBtn.addEventListener( 'click', function(){
        cityChooserPopup.classList.remove('clicked');
        body.classList.remove('overflow');
    });

    let burgerBtn = document.querySelector('.burger-menu__wrapper');
    let mobileMenu = document.querySelector('.mobile-menu');
    let backgroundOverlay = document.querySelector('.background-overlay');
    burgerBtn.addEventListener('click', function(){
      if ( !this.classList.contains('burger-menu__clicked') ) {
        this.classList.add('burger-menu__clicked');
        mobileMenu.classList.add('active');
        backgroundOverlay.classList.add('active');
        body.classList.add('overflow');
      } else {
        this.classList.remove('burger-menu__clicked');
        mobileMenu.classList.remove('active');
        backgroundOverlay.classList.remove('active');
        body.classList.remove('overflow');
      }
    });
    backgroundOverlay.addEventListener('click', function(){
        if ( this.classList.contains('active') ){
            burgerBtn.classList.remove('burger-menu__clicked');
            mobileMenu.classList.remove('active');
            this.classList.remove('active');
            body.classList.remove('overflow');
        }
    })

    var splideElements = document.getElementsByClassName( 'splide' );
    for ( let i = 0, len = splideElements.length; i < len; i++ ) {
        if ( i == 0 ) {
            new Splide( splideElements[ 0 ], {
                type        : "loop",
                width       : "100%",
                height      : "527px",
                pagination  : true,
                arrows      : false,
                autoplay    : true,
                interval    : "2500",
                drag        : true,
                lazyLoad    : true,
                breakpoints : {
                    767: {
                        height  : "150px",
                    },
                }
            } ).mount();
        } else if ( i == 1 ) {
            new Splide( splideElements[ 1 ], {
                perPage     : 5,
                rewind      : true,
                width       : "100%",
                pagination  : true,
                arrows      : false,
                autoplay    : true,
                interval    : "3500",
                drag        : true,
                gap         : "10px",
                lazyLoad    : true,
                breakpoints : {
                    767: {
                        perPage  : 2,
                    },
                    991: {
                        perPage  : 3,
                    }
                },
                //fixedHeight: '304px',
            } ).mount();
        } else {
            new Splide( splideElements[ i ] ).mount();
        }
    }
});

