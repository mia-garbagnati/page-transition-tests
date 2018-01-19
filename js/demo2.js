{
    const DOM = {};
    DOM.click = document.querySelector('.click');
    DOM.content = document.querySelector('.content-before');
    DOM.shape = DOM.content.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');

    const init = () => {
        DOM.click.addEventListener('click', navigate);
    };

    const navigate = () => {
        anime({
            targets: DOM.content,
            duration: 1500,
            easing: 'easeInOutSine',
            translateY: '-200vh'
        });

        anime({
            targets: DOM.path,
            duration: 1500,
            easing: 'easeInOutSine',
            d: Dom.path.getAttribute('pathdata:id')
        });
    };

    init();
}