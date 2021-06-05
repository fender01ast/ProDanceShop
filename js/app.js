document.addEventListener( 'DOMContentLoaded', function () {
    let currentYear = new Date().getFullYear();
    document.getElementById('js-year').innerHTML = currentYear;

    var splideElements = document.getElementsByClassName( 'splide' );
    for ( let i = 0, len = splideElements.length; i < len; i++ ) {
        new Splide( splideElements[ i ] ).mount();
    }
});