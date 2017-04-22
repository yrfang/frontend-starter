
const inputs = document.querySelectorAll('.controls input');
//console.log(inputs);
//a nodeList in cosole, just a array-like collection

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  //console.log(this.name);
  //console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//traditional javascript syntax compared with arrow function in ES6 syntax (more shorter)
/*
inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);
});
*/

const submit = document.getElementById('submit');
submit.addEventListener('click', function() {
  const img = document.getElementById('img');
  const imgURL = document.getElementById('imgURL').value;

  if (imgURL.trim() == '') {
    return;
  } else {
    document.getElementById('img').src = String(imgURL);
    //console.log(img.src);
    document.getElementById('imgURL').value = '';
  }
});
