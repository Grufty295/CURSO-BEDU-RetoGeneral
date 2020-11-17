function navSlide() {
    const burguer = document.querySelector('.burguer');
    const sidenav = document.querySelector('.main-menus');

    burguer.addEventListener('click', () => {
        sidenav.classList.toggle('sidenav-active');
        burguer.classList.toggle('burguer-toggle');
    });
}

const app = ()=>{
    navSlide();
}

app();