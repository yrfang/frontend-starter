$(document).ready(function() {
  var prep = '';
  var curNum = '';
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

  $('#display').focus();

	$('#display').on('keydown', function (e) {
		e.preventDefault();
	});

  $('.num').on('click', function() {
    console.log(this.id);
    updateNum(this.id);
  });

  $('.operator').on('click', function(operator) {
    operator = this.id;
    console.log(operator);

    var operation;

    switch (true) {
      case (operator === '+') :
        operation = this.innerHTML;
        break;

      case (operator === '-') :
        operation = this.innerHTML;
        break;

      case (operator === '*') :
        operation = this.innerHTML;
        break;

      case (operator === '/') :
        operation = this.innerHTML;
        break;

      case (operator === '+-') :
        operation = this.innerHTML;
        break;

      default :
        break;
    }

    console.log(operation);
    curNum = curNum + operation;

    displayNum(curNum);
  });

  $('#all_clear').on('click', function() {
    curNum = '';
    prep = '';
    displayNum(curNum);
  });

  $('.run').on('click', function() {
    run();
  });


  //function
  function displayNum() {
    //ans = prep + curNum + operator;
    $('#display').val(curNum);
  }

/*
  function determineOperator(key) {
    if (key == '+' || key == '-' || key == '*' || key == '/') {
      updateOperator(key);
    } else if (key == 'enter') {
      equalCal();
    } else if (key != 'delete') {
      updateNum(key);
    }
  }
*/

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

  function test() {
    var idArray = [];
    $('.operator').each(function () {
        idArray.push(this.id);
        console.log(idArray);
    });
  }



});
