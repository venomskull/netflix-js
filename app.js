// CLICK MOVIES ARROW ICON
const arrows = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    const itemNumber = movieList[0].querySelectorAll('.movie-list-item').length;
    let clickCounter = 0;
    const ratio = Math.floor(window.innerWidth / 270);
    arrow.addEventListener('click', () => {
        clickCounter++;
        // 7 -(4+4) + (4+0)
        // 7 -(4+0) + (4+3)
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - (270 + 20)}px)`;
            //270 is width of .movie-list-item-img
            //20 is margin-right of .movie-list-item
            console.log(movieList[i].computedStyleMap().get('transform')[0].x.value);
        } else {
            movieList[0].style.transform = 'translateX(0)';
            clickCounter = 0;
        }


    });
    // console.log(movieList[i].computedStyleMap().get('transform'));
    // console.log(window.innerWidth);
    // console.log(window.innerWidth / 270);
    // console.log(Math.floor(window.innerWidth / 270));
});

// TOGGLE
const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.nav-container,.toggle,.sidebar,.left-menu-icon,.toggle-ball');

ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active');
    });
})