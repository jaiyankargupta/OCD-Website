let sub=document.getElementById("butt");
sub.addEventListener("click",tocheck);

function tocheck()
{
const w_name=document.getElementById("w-name");
const w_email=document.getElementById("w-email");
const w_message=document.getElementById("w-message");
const w_contact=document.getElementById("w-contact");

let check=false;
const names=document.getElementById("name");    
w_name.textContent="";
if(names.value=="")
{
    w_name.innerText="Name required";
    document.getElementById("w-name").style.color="red";
    check=true;
}

const email=document.getElementById("email");


if(email.value=="")
{
        w_email.innerText="Email required";
        document.getElementById("w-email").style.color="red";
        check=true;
}
const message=document.getElementById("message");
if(message.value=="")
{
            w_message.innerText="Message required";
            document.getElementById("w-message").style.color="red";
            check=true;
}   
const contact=document.getElementById("contact");
if(contact.value=="" )
    {
                w_contact.innerText="Contact required";
                document.getElementById("w-contact").style.color="red";
                check=true;
    }   
else if ((contact.value).length!=10)
{
    w_contact.innerText="Invalid Number";
    document.getElementById("w-contact").style.color="red";
    check=true;
       
}
if(check==false)
{
document.getElementById("formResponse").innerText="Thank you for your message!";
}
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById("formResponse").style.display = 'block';
    setTimeout(() => {
        contactForm.reset();
        document.getElementById("formResponse").style.display = 'none';
    }, 2000);
});
}
