

function showResume() 
{
  var x = document.getElementById("resume");

  if (x.style.display === "none") 
  {
    x.style.display = "block";
    document.querySelector('#resumeBtn').innerHTML = 'Hide Resume';
  } else 
  {
    x.style.display = "none";
    document.querySelector('#resumeBtn').innerHTML = 'See Resume';
  }
 }


// Source: https://stackoverflow.com/questions/58079581/toggle-between-2-stylesheets-one-toggle-with-local-storage
//How to toggle styles without using localStorage in windows.onload()
function toggle(theme) 
{
  var styleSheet = document.getElementById("theme");
  if (theme != styleSheet.href) 
    styleSheet.href = theme;
}

window.addEventListener("load",function() 
{
  var theme = localStorage.getItem("theme") || document.getElementById("theme").href;
  toggle(theme);
  document.getElementById("tog").addEventListener("change",function() 
  {
    var theme = this.checked ? "yellow_style.css" : "blue_style.css" 
    toggle(theme);  
    localStorage.setItem("theme",theme);
  })

})


