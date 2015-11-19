'use strict';     
function login () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var JsonData = xhttp.responseText;
      alert(JsonData);
    }
  };
  xhttp.open("GET", "Uyelikler.json", true);
  xhttp.send();

  var UserName = document.getElementById("username").value;
  var Pass = document.getElementById("pass").value;
  var MembersObj = JSON.parse(JsonData);
  var LoginStatus = false;
  for(var i = 0; i < MembersObj.Members.length; i++){
    if(
      (UserName == MembersObj.Members[i].Email || 
        UserName == MembersObj.Members[i].UserName) && 
      Pass == MembersObj.Members[i].Pass) {
      alert("Giriş Yapıldı.");
      LoginStatus = true;
      document.cookie = MembersObj.Members[i].UserName;
      window.location = "home.html";
      break;
    }
  } 

  if(!LoginStatus) {
   alert("Kullanıcı Adı Veya Şifre Yanlış!");
  }
}

function RegisterCheck () {
  if(document.cookie == "" || document.cookie == null){ 
    window.location = "index.html";
  } else{
    document.getElementById("welcome-text").innerHTML = document.cookie+" ";
  }
}

function exit () {
  document.cookie = "";
  window.location = "index.html";
  alert("Çıkış Yapıldı.");
}
