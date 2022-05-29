let count =0;
function setCookie(cname,cvalue) {
    
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let temp = getCookie("temp");
    if (temp != 0) {
     count=getCookie("temp")
    } else {
      
        setCookie("temp", 0);
      
    }
  }
  
  function reset(){
      
    setCookie("temp", 0);
    count=0;
  }

function popup(){
    
    document.getElementById("shadow").style.display="block";
    document.getElementById("popup").style.display="block";
    if(count>=4)
      document.getElementById("reset").style.display="block";
    else{
      document.getElementById("reset").style.display="none";
    }
    count++;
    setCookie("temp", count);
    document.getElementById("count").innerHTML=count;   
}
function close_popup(){
    document.getElementById("shadow").style.display="none";
    document.getElementById("popup").style.display="none"; 
}