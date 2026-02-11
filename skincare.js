let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>
    {
    searchForm.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    searchForm.classList.remove('active')
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}



window.onscroll = () =>
    {
        searchForm.classList.remove('active')
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
    }




    var swiper = new Swiper(".products-slider", {
        loop:true,
        spaceBetween: 10,
       
       
        autoplay:{
            delay: 7500,
            disableOnInteraction:false,
        },
      

        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
           
          },
          1024: {
            slidesPerView: 5,
          
          },
        },
      });
    