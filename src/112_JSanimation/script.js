const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

let count = 1;

function myAnimation() {
  switch (count) {
    case 0:
      if (pos < 300) {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + 'px';

        requestAnimationFrame(myAnimation);
      }
      break;

    case 1:
      if (pos > 0) {
        pos--;
        elem.style.top = pos + "px";
        elem.style.left = pos + 'px';

        requestAnimationFrame(myAnimation);
      }
      break;
  }
}

btn.addEventListener('click', () => {
  requestAnimationFrame(myAnimation);
  switch (count) {
    case 0:
      count ++;
      break;

    case 1:
      count--;
      break;
  }
});

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id);
