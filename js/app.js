document.addEventListener( 'DOMContentLoaded', function () {
    var splideElements = document.getElementsByClassName( 'splide' );
    console.log(splideElements);
    for ( let i = 0, len = splideElements.length; i < len; i++ ) {
        new Splide( splideElements[ i ] ).mount();
    }
});