window.addEventListener('DOMContentLoaded', () => {
    let arrows = document.querySelectorAll('.arrow-right');
    arrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            
            arrow.classList.add('arrow-right-active');
        });
    });
});

