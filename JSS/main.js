function togglemenu(){
    const menu= document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}



function validate(){
    var name=document.getElementById("name");
    var mail=document.getElementById("mail");
    var msg=document.getElementById('msg');

    if(name.value==""){
        alert("Must have a Name")
        document.form1.name.focus();
        return false;
    }
    
    if(mail.value==""){
        alert("Must have a Valid email ID")
        document.form1.mail.focus();
        return false;
    }
    
    if(msg.value==""){
        alert("Type a message")
        document.form1.msg.focus();
        return false;
    }

}