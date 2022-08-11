var button = document.getElementById('button');

var roll_no_input = document.getElementById('roll_no_input');
var name_input = document.getElementById('name_input');
var marks_input = document.getElementById('marks_input');

var right_container = document.getElementById('right-container');

button.addEventListener('click' , function(){

      var rollno = roll_no_input.value;
      var name = name_input.value;
      var marks = marks_input.value;


     if(rollno || name || marks){

     

      console.log(rollno , name , marks);

    var div = document.createElement('div');
    div.innerHTML = " Roll no -" + rollno + " , " + name +" has scored " + marks + " marks";
    right_container.appendChild(div);
     }else{
        alert('Fill all the fields');
     }

});