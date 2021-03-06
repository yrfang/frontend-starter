$(document).ready(function() {
  var prep = '';
  var curNum = '';
  var operator = '';
  var testNum = '';
  var ans;
  var lastInput = '';
  var lastInputIsNum = false;

  var keycode = {
		'13': 'enter',
		'48': '0',
		'49': '1',
		'50': '2',
		'51': '3',
		'52': '4',
		'53': '5',
		'54': '6',
		'55': '7',
		'56': '8',
		'57': '9',
		'106': '*',
		'107': '+',
		'109': '-',
		'111': '/',
		'110': '.',
		'96': '0',
		'97': '1',
		'98': '2',
		'99': '3',
		'100': '4',
		'101': '5',
		'102': '6',
		'103': '7',
		'104': '8',
		'105': '9',
		'61': '+',
		'187': '+',
		'173': '-',
		'189': '-',
		'191': '/',
		'190': '.',
	}

  $('#display').focus();

	$('#display').on('keydown', function (e) {
		e.preventDefault();
	});

  $('.num').on('click', function() {
    //console.log(this.id);
    updateNum(this.id);
    lastInputIsNum = true;
  });

  $('.operator').on('click', function() {
    if (true == checkOperator(this.id)) {
      updatePrep(this.id);
      //console.log(prep);
    }
    lastInputIsNum = false;
  });

  $('.negative').on('click', function() {
    if (true == checkOperator(this.id)) {
      updateNegative(this.id);
      //console.log(prep);
    }
    lastInputIsNum = true;
  });

  $('#all_clear').on('click', function() {
    curNum = '';
    prep = '';
    displayNum();
  });

  $('#clear_entry').on('click', function() {
    console.log(curNum);
    curNum = '';
    displayNum();
    lastInputIsNum = false;
  });

  $('#equals').on('click', function() {
    displayAns();
  });

  $('#display').on('keyup', function(e) {
    e.preventDefault();
    var key = e.which;
    if (key==8 || key==46) {
      key = 'delete';
      curNum = '';
      prep = $('#display').val();
      console.log(prep);
      prep = prep.substring(0, prep.length-1); //the secondLast one string
      $('#display').val(prep);
      console.log(prep);
    } else if (e.shiftKey && e.which==56) {
      key = '*';
      curNum = '';
      prep = $('#display').val();
      console.log(prep);
      $('#display').val(prep);
    }
    else {
      key = keycode[String(key)];
    }

    if (key) {
      determinKeycond(key);
    }
  });




//----------function----------
  function displayNum() {
    $('#display').val(prep + curNum);
  }



  function updateNum(num) {
    if (num == '.') {
      if (curNum.indexOf('.') == -1) {
        curNum += num; //curNum is string --> added into a string
      } else {
        return;
      }
    } else {
      curNum += num;
    }
    displayNum();
  }



  function checkOperator(currentInput) {
    return lastInputIsNum;
  }



  function updatePrep(operator) {
    prep = prep + curNum + operator;
    curNum = '';
    displayNum();
    console.log(prep);
  }



  function updateNegative(negativeOperator) {
    updatePrep('');
    console.log(prep);

    var checkNegativeOperator = eval(prep);
    console.log(checkNegativeOperator);

    if (checkNegativeOperator > 0) {
      prep = checkNegativeOperator * (-1);
    } else if (checkNegativeOperator < 0) {
      prep = checkNegativeOperator * (-1);
    }
    $('#display').val(prep);
  }



  function displayAns() {
    updatePrep('');
    console.log(prep);

    //test the lasted num is a digital or not
    var test = parseFloat(prep.substr(prep.length-1));
    //console.log(prep.length);
    //console.log(prep.substr(prep.length-1));
    console.log(test);

    if (isNaN(parseInt(test))) {
      return;
    } else {
      ans = eval(prep) * 1e6;
      ans = Math.round(ans, 6);
      ans = ans/1e6;
      console.log(ans);

      if (ans == Infinity || ans == -Infinity || ans == NaN) {
        alert("It\'s invalid.");
        $('#display').val('');
        curNum = '';
        ans = '';
      } else {
        $('#display').val(ans);
        curNum = ans;
      }
    }
    prep = '';
  }



  function determinKeycond(key) {
    if (key == '+' || key == '-' || key == '*' || key == '/') {
      if (true == checkOperator(key)) {
        updatePrep(key);
      }
      lastInputIsNum = false;
    } else if (key == 'enter') {
      displayAns();
    } else if (key != 'delete') {
      updateNum(key);
      lastInputIsNum = true;
    }
  }

});
