console.log('app init');

const $btnLoader = document.getElementById('btnLoader');
const $loader = document.getElementById('loader');

$btnLoader.addEventListener('click', (e) => {
  e.preventDefault();
  if ($loader.classList.contains('active')) {
    $loader.classList.remove('active');
  } else {
    $loader.classList.add('active');
  }
})



const $btnAnimation = document.getElementById('btnAnimation');
const $btnReset = document.getElementById('btnReset');
const animationElements = ['caixa', 'caminhao', 'senhora'];

$btnAnimation.addEventListener('click', (e) => {
  e.preventDefault();
  const animations = document.querySelectorAll('.animation');
  animations.forEach((item) => {
    if (item.style.animationPlayState == "running") {
      item.style.animationPlayState = "paused";
      item.style.WebkitAnimationPlayState = "paused";
    } else {
      item.style.animationPlayState = "running";
      item.style.WebkitAnimationPlayState = "running";
    }
  })
})

// $btnReset.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target)
//   animationElements.forEach((item) => {
//     console.log(item+'-animation')
//     (item+'-animation').classList.remove(item+'-animation')
//   })
//   // $btnReset.classList.remove('')
// })