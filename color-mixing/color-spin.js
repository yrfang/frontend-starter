$(document).ready(function() {

  $('.btn_container input').change(function() {
    // console.log(this);
    // $('.block.left').css('background-color', var(--color_left));
    document.documentElement.style.setProperty(`--${this.name}`, this.value);
  });

  $('.btn_container button').click(function() {
    $('.block_container').addClass('rotate');
  });

});
