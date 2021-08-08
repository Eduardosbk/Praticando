const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.icon-close');
const wrapper = document.querySelector('.wrapper');
const links = document.querySelectorAll('a');

menu.addEventListener('click', () => {
  sidebar.classList.add('active');
  wrapper.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('active');
  wrapper.classList.remove('show');
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

links.forEach((element) => {
  element.addEventListener('click', () => {
    sidebar.classList.remove('active');
    wrapper.classList.remove('show');
  });
});

/* SCROLLREVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `.banner img, .banner .content .heading, .banner .content .text,
   .about .contentBx .heading, .about .contentBx .text, .about .imgBx,
   .services .heading, .services .text, .services .container .serviceBx .icon, .services .text, .services .container .serviceBx h2,
   .technology .contentBx .heading, .technology .contentBx .text, .technology .imgBx img,
   .clients .heading, .clients .text, .clients .imgBx,
   .testimonials .heading, .testimonials .container .contentBx div .text, .testimonials .container .contentBx div .text,
   .team .heading, .team .text,  .team .container .teamBx .box, .team .container .teamBx .box .imgBx, .team .container .teamBx .box .imgBx img,
   .contact div .heading, .contact div .text, .contact .about .imgBx2, .contact .about .redBg .form .inputBx input, .contact .about .redBg .form .inputBx button,.contact .about .redBg .form .inputBx textarea,
   footer p, footer ul li
   `,
{interval: 100});

