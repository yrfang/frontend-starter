function computeBMI() {
      //Obtain user inputs
      var height = Number(document.getElementById("height").value);
      var weight = Number(document.getElementById("weight").value);

      //calculation
      var calcBMI = weight/Math.pow((height/100), 2);

      //Display result of calculation
      var output = Math.round(calcBMI*100)/100;
      document.getElementById("output").innerHTML = "BMI: " + output;

      //comment
      switch (true) {

        case (calcBMI < 18.5) :
               comment = 'You are underweight';
               break;
           case (calcBMI >= 18.5) && (calcBMI < 25) :
               comment = 'You fall within the average range';
               break;
           case (calcBMI >= 25) && (calcBMI < 30) :
               comment = 'You are overweight';
               break;
           case (calcBMI >= 30) :
               comment = 'You are obese';
               break;
          default :
                comment = "Enter the correct information, thank you."
                break;
      }

      var comment;
      document.getElementById("comment").innerHTML = "FYI: " + comment;
}

/*
document.getElementById('submit').onclick = function() {
    computeBMI();
};
*/
