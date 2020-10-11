function formValidation()
{
       var ucountry = document.registration.country;
       var ustate = document.registration.State;
       var uemail = document.getElementById("email").value;
       var uRemail = document.getElementById("ReTypeEmail").value;
       var umsex = document.registration.msex;
       var ufsex = document.registration.fsex;
       {
        if(countryselect(ucountry))
        {
        if(Stateselect(ustate))
        {
            if(validsex(umsex,ufsex))
    {
        if(validemail(uemail,uRemail))
    {
       }
    }
}
        }}}
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