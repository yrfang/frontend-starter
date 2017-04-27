const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function checkSlide(e) {
  //console.count(e)
  //console.log(window.scrollY);
  //console.log(window.innerHeight); //innerHeight is a fixed number in the window
  sliderImages.forEach(sliderImage => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight - sliderImage.height/2);
    console.log(slideInAt);
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop; //make sure the height
    const isNotScrolledPast = window.scrollY < imageBottom; //make sure not scroll away all the page
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('.active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
