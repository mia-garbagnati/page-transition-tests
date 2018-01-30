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
            translateY: {
                value: '-200vh',
                delay: 100,
                duration: 2000,
                easing: 'easeInOutQuad'
            }
        });

        anime({
            targets: DOM.path,
            duration: 1200,
            easing: 'linear',
            d: DOM.path.getAttribute('pathdata:id')
        });
    };

    init();
}