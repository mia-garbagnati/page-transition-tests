{
    const DOM = {};
    DOM.click = document.querySelector('.click');
    DOM.content = document.querySelector('.content-before');
    DOM.shape = DOM.content.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');

    DOM.shape.style.transformOrigin = '50% 0%';

    const init = () => {
        DOM.click.addEventListener('click', navigate);
    }

    const navigate = () => {
        anime({
            targets: DOM.content,
            duration: 1100,
            easing: 'easeInOutSine',
            translateY: '-200vh'
        });

        anime({
            targets: DOM.shape,
            scaleY: [
                {value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
                {value:1,duration: 550,easing: 'easeOutQuad'}
            ]
        });

        anime({
            targets: DOM.path,
            duration: 1100,
            easing: 'easeOutQuad',
            d: DOM.path.getAttribute('pathdata:id')
        });
    };

    init();
};