// this function changes the color palette based on the current time
function seasons()
{
  let today= new Date();
  if (today.getMinutes()<16)
  {
    changeColor('1');
  }
  else if (today.getMinutes()>15 && 31>today.getMinutes())
  {
    changeColor('3');
  }
  else if (today.getMinutes()>30 && 46>today.getMinutes())
  {
    changeColor('2');
  }
  else
  {
    changeColor('0');
  }
}
// This function is what actually updates the color palette based on the input #--0 is winter, 1 is spring, 2 is autumn and 3 is spring
function changeColor(newColor)
{
  let color1 = "#f1e3cb";
  let color2 = "#581c0c";
  let color3 = "#ca5116";
  let color4 = "#f9b384";
  if(newColor == '0')
  {
  color1 = "#ebf0f6";
  color2 = "#132238"; 
  color3 = "#364e68";
  color4 = "#98ccd3";
  }
  else if(newColor == '1')
  {
  color1 = "#ffb0b0";
  color2 = "#335d2d";
  color3 = "#fe7171";
  color4 = "#7ea04d";
  }
  else if(newColor == '2')
  {
  color1 = "#f1e3cb";
  color2 = "#581c0c";
  color3 = "#ca5116";
  color4 = "#f9b384";
  }
  else 
  {
  color1 = "#79bd8f";
  color2 = "#ff6138";
  color3 = "#ffff9d"; 
  color4 = "#beeb9f";
  }
  let body = new Array (color1,"#000000");
  let logo = new Array (color2,"#000000");
  let banner = new Array (color2,color4);
  let nav = new Array (color3,color4);
  let active = new Array (color4,color2);
  let section = new Array (color4,"#000000");
  let options = new Array (body,logo,banner,nav,active,section);
  let seasons = ["winter","spring","autumn","summer"];
  let newColors = document.getElementsByClassName(seasons[newColor]);
for (i=0;i<newColors.length;i++)
{
  newColors[i].style.backgroundColor=options[i][0];
  newColors[i].style.color=options[i][1];
}
}
// form validation scripts  -- thanks to the FS1000 jsforms sample you provided which gave me the direction for this validation type
function validatePhone()
{
  let phoneNum = document.getElementById('phone').value
  if(/^(\()?([2-9][02-8][02-9])([)-])?([2-9][0-9][0-9])([-])?([0-9][0-9][0-9][0-9])*$/.test(phoneNum)!=true)
  {
    document.getElementById("errPhone").innerHTML = "Please enter a valid 10-digit phone number.";
  }
  else
  {
    document.getElementById("errPhone").innerHTML = "Thank you.";
  }
}
function validateEmail()
{ 
  let emailAdd = document.getElementById('email').value
  let atPosition=emailAdd.indexOf("@");
  let dotPosition=emailAdd.lastIndexOf(".");
  if (atPosition<1 || dotPosition<atPosition+2 || dotPosition+2>=emailAdd.length)
  {
    document.getElementById("errEmail").innerHTML = "Please enter a valid email address.";
  }
  else
  {
    document.getElementById("errEmail").innerHTML= "Thank you.";
  }
}
let error = ["errFN","errLN","errPhone","errEmail","errCom"]
function validateOther()
{
   let firstName = document.getElementById('first').value;
   let lastName = document.getElementById('last').value;
   let email = document.getElementById('email').value;
   let phone = document.getElementById('phone').value;
   let comments = document.getElementById('comments').value;
   let text = [firstName, lastName, phone, email, comments]
   let error = ["errFN","errLN","errPhone","errEmail","errCom"]
  for (i=0;i<text.length;i++)  
  if(text[i] == "")
  {
    document.getElementById(error[i]).innerHTML = "This field is required";
  }
  else
  {
    document.getElementById(error[i]).innerHTML = "Thank you.";
  }
}
function validate()
{
  count = 0
  for(i=0;i<5;i++)
  {
    if(document.getElementById(error[i]).innerHTML == "Thank you.")
      {
      count = count + 1;
      }
  }
  if(count == 5)
  {
    alert("Thank you for your submission");
    document.getElementById("form").submit();
  }
  else  
  {
    document.getElementById("errForm").innerHTML = "Please fill in all fields";
  }
}
  