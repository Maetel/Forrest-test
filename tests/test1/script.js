const navbar = document.getElementById('navbar');
const content = document.getElementById('content-container');
const items = document.getElementsByClassName('item');
const sticky = navbar.offsetTop;
const navHeight = navbar.offsetHeight;

const defaultContentPaddingTop = 0;
console.log(content.style.paddingTop);
content.style.paddingTop = String(defaultContentPaddingTop) + 'px';
content.style.paddingBottom = String(defaultContentPaddingTop) + 'px';

function putSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
    content.style.paddingTop =
      String(navHeight + defaultContentPaddingTop) + 'px';
  } else {
    navbar.classList.remove('sticky');
    content.style.paddingTop = String(defaultContentPaddingTop) + 'px';
    content.style.paddingBottom = String(defaultContentPaddingTop) + 'px';
  }
}

const toPx = (num) => `${String(num)}px`;

for (const item of items) {
  item.style.paddingTop = toPx(navHeight);
}
//console.log(content);

window.onscroll = function () {
  putSticky();
};

// const footer = document.getElementsByClassName('footer')[0];
// const footerIcon = document.getElementsByClassName('footer__icon')[0];

// footer.addEventListener('mouseover', (e) => {
//   e.preventDefault();
//   console.log(e.target.firstChild);
//   footerIcon.classList.add('hide');
// });
