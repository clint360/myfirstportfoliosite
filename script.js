const all = document.getElementById("mra");
const showall = document.getElementById("but");
let count =0;
showall.addEventListener('click', () =>
{
  count++;
  all.style.display = "block";
  showall.innerHTML= "< Show less";
  if (count>1){
    count=0;
    all.style.display = "none";
    showall.innerHTML= "Show More >";
  }
 });

