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
  color1 = "#ffff9d"; 
  color2 = "#79bd8f";
  color3 = "#ff6138";
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
