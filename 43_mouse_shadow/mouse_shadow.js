const hero = document.querySelector('.hero');
const text =  hero.querySelector('h1');
const walk = 350; //px

const info = document.querySelector('#info');

function shadow(e) {
  //console.log(e);
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  console.log(x, y);
  //this => the children inside pararent div (event you listen)
  //e.target => the event you trigger
  //console.log(this, e.target);
  //because we want to make sure the mouse's track when moving around the target

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  //console.log(xWalk, yWallk);

  //setting multiple text-shadow
  text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(0, 26, 255, 0.7),
      ${xWalk * -2}px ${yWalk}px 0 rgba(0, 255, 79, 0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(255, 107, 0, 0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(255, 0, 184, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);
text.addEventListener('keyup', function() {
  setTimeout(function() {
    info.style.display = 'none';
  }, 2500);
});
