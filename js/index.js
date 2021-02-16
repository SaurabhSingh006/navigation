const btn = document.querySelector('.nav__btn');
const nav = document.querySelector('.nav__container');
console.log(nav);

btn.addEventListener('click', () => { 
  const val = btn.textContent;
  if(val === 'MENU') {
    nav.style.display = 'block';
    btn.textContent = 'CLOSE'
  } else if(val === 'CLOSE') {
    nav.style.display = null;
    btn.textContent = 'MENU'
  }
});