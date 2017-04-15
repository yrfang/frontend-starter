$(document).ready(function() {
  var curNum = '';
  var cal = '';
  var operator;
  var ans;

  var keyCode = {
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

  //$('#display').focus();

	$('#display').on('keydown', function (e) {
		e.preventDefault();
	});

  $('.num').on('click', function() {
    console.log(this.id);
    updateNum(this.id);
  });

  $('.operator').on('click', function() {
    updateOperator(this.id);
  });

  $('.run').on('click', function() {
    equalCal();
  });


  //function
  function displayNum() {
    $('#display').val(cal + curNum);
  }

  function determineOperator(key) {
    if (key == '+' || key == '-' || key == '*' || key == '/') {
      updateOperator(key);
    } else if (key == 'enter') {
      equalCal();
    } else if (key != 'delete') {
      updateNum(key);
    }
  }

  function updateNum(num) {
    if (num == '.') {
      if (curNum.indexOf('.') !== -1) {
        return;
      } else {
        curNum += num; //curNum is string --> added into a string
      }
    } else if (num == 'negative') {
      if (curNum.indexof('-') !== -1) {
        curNum = curNum.substr(0);
      } else {
        curNum = (0 - curNum).toString();
      }
    } else {
      curNum += num;
    }

    displayNum();

  }

  function updateOperator(operator) {
    cal = cal + curNum + operator;
    curNum = '';
    displayNum();
    console.log(cal);
    console.log(curNum);
    console.log(operator);
  }

  function equalCal() {
    updateNum('');

    $('#display').val(ans);
    curNum = ans;
    cal = '';
  }

});
