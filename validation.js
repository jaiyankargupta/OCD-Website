let sub=document.getElementById("butt");
sub.addEventListener("click",tocheck);

function tocheck()
{
const w_name=document.getElementById("w-name");
const w_email=document.getElementById("w-email");
const w_message=document.getElementById("w-message");
const w_contact=document.getElementById("w-contact");


const names=document.getElementById("name");    
w_name,textContent="";
if(names.value=="m")
{
    w_name.innerText ="name is  required";
}


const email=document.getElementById("email");
const message=document.getElementById("message");
const contact=document.getElementById("contact");
}