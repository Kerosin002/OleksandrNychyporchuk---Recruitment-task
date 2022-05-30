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


// api url
const api_url ="https://jsonplaceholder.typicode.com/users";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name and Surname</th>
		<th>E-Mail</th>
		<th>Address</th>
		<th>Phone</th>
    <th>Company Name</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data) {
    
		tab += `<tr>
	<td>${r.name} </td>
	<td>${r.email}</td>
	<td>${r.address.city} ${r.address.street} ${r.address.suite}</td>
	<td>${r.phone}</td>		
  <td>${r.company.name}</td>	
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}
