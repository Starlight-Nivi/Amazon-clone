//form1
function vfun(){
	var name=document.forms["myform"]["name"].value;
	var password=document.forms["myform"]["password"].value;
if(name==null||name=""){
	document.getElementsByTagName('errorBox').innerHTML="enter the user name";
	return false;
}
if(password==null||password==""){
	document.getElementById('errorBox').innerHTML="enter the password";
	return false;
}

if(name!=''&& password!=''){
	alert("Logged in successfully");
}
}
function vfun1(){
	var name1=document.forms["myform2"]["name1"].value;
	var email1=document.forms["myform2"]["email1"].value;
	var password1=document.forms["myform2"]["password1"].value;
	var password2=document.forms["myform2"]["password2"].value;

if(name1==null||name1=""){
	document.getElementById('errorBox').innerHTML='enter the user name';
	return false;
}
if(email1==null||email1=""){
	document.getElementById('errorBox').innerHTML='enter the email';
	return false;
}
if(password1==null||password1==""){
	document.getElementById('errorBox').innerHTML='enter the user name';
	return false;
}
f(password2==null||password2==""){
	document.getElementById('errorBox').innerHTML='enter the user name';
	return false;
}
if(name1==null||password1==""){
	document.getElementById('errorBox').innerHTML='enter the password';
	return false;
}
if(password1!=password2){
	document.getElementById('errorBox').innerHTML="password doesn't match";
	return false;
}
if(name1!=" "&& password1!=" "&&password2!=" "&&email1!=" "){
	alert("Registered successfully");
}
}