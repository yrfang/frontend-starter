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
    updatePrep(this.id);
  });

  $('#all_clear').on('click', function() {
    curNum = '';
    prep = '';
    displayNum(curNum);
  });

  $('#equals').on('click', function() {
    displayAns(ans);
  });


  //function
  function displayNum() {
    //ans = prep + curNum + operator;
    $('#display').val(curNum);
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

  function updatePrep(operator) {
    curNum = curNum + operator;
    displayNum();
  }

  function displayAns() {
    console.log(curNum);

    ans = eval(curNum);
    curNum = ans;
    console.log(ans);
    displayNum(curNum);

    curNum = '';
    console.log(curNum);
  }

});
