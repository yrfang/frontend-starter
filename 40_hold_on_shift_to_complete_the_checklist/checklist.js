const checkbox = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  //console.log(e);
  let inBetween = false;
  if (e.shiftKey && this.checked) {// go ahead and do what we please
    // loop over every single checkbox
    checkbox.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log(inBetween);
        console.log('Starting to check them inbetween!');
      }

      if (inBetween) {
        console.log('on');
        checkbox.checked = true;
      }
    })
  }

  //最後一個有checked的checkbox, 則會變成按shift開頭就顯示
  lastChecked = this;
}

checkbox.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
