document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type: 'loop',
        width: '100%',
        height: '527px',
        pagination: true,
        arrows: false,
        autoplay: false,
        interval: 2500,
        drag: true
    } ).mount();
});