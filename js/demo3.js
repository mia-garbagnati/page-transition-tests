{
    const DOM = {};
    DOM.click = document.querySelector('.click');
    DOM.content = document.querySelector('.content-before');
    DOM.shape = DOM.content.querySelector('svg.shape');
    DOM.path = DOM.shape.querySelector('path');
    DOM.shape.style.transformOrigin = '50% 0%';

    const init = () => {
        DOM.click.addEventListener('click', navigate);
    };

    const navigate = () => {
        anime({
            targets: DOM.content,
            duration: 1600,
            easing: 'easeInOutCubic',
            translateY: '-200vh'
        });

        anime({
            targets: DOM.shape,
            easing: 'easeInOutCubic',
            scaleY: [
                { value: [0,1], duration: 800} ,
                { value: 0, duration: 1200, easing: 'easeOutElastic', elasticity: 700 }
            ]
        });

        anime({
            targets: DOM.path,
            duration: 800,
            easing: 'easeInOutQuad',
            d: DOM.path.getAttribute('pathdata:id')
        });

        anime({
            targets: [DOM.content.querySelector('.inner'), DOM.shape],
            duration: 1300,
            easing: 'linear',
            backgroundColor: (t,i) => {
                if ( i === 0 ) return '#fff1fb';
            },
            fill: (t,i) => {
                if ( i === 1 ) return '#fff1fb';
            }
        });
    };

    init();
}