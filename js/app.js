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

    var splideElements = document.getElementsByClassName( 'splide' );
    for ( let i = 0, len = splideElements.length; i < len; i++ ) {
        new Splide( splideElements[ i ] ).mount();
    }
});

