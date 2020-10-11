function formValidation()
{
       var ucountry = document.registration.country;
       var ustate = document.registration.State;
       var uadd = document.registration.Address;
       var uemail = document.getElementById("email").value;
       var uRemail = document.getElementById("ReTypeEmail").value;
       var umsex = document.registration.msex;
       var ufsex = document.registration.fsex;
       var uPass = document.getElementById("password1").value;
       var uCPass = document.getElementById("password2").value;
       var uMess = document.registration.About.value;
       {
        if(countryselect(ucountry))
        {
        if(Stateselect(ustate))
        {
            if(alphanumeric(uadd))
    {
            if(validsex(umsex,ufsex))
    {
        if(validpass(uPass,uCPass))
    {
        if(validemail(uemail,uRemail))
    {
        if(validmess(uMess)){
        }
    }
}
       }
    }
}
        }}}
        function validmess(uMess){
            if(uMess == "" )
            {
              alert("Type your Message");
              return false;
            }
            else{
              alert('Form Succesfully Submitted');
              window.location.reload()
              return true;
            }
          }
        function validemail(uemail,uRemail)
{
    if(uemail != uRemail) 
{
    alert("Emails do not match.");
    return false;

}
    else
{
  
    }
    return true;

}
    function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function Stateselect(ustate)
{
if(ustate.value == "Default")
{
alert('Select your state from the list');
ustate.focus();
return false;
}
else
{
return true;
}
}
function validpass(uPass,uCPass)
  {

  
  if (uPass != uCPass) {
    alert("Passwords do not match.");
    return false;
  }

return true;
}


  

  function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}

return true;}