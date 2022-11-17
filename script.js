const name=document.getElementById("name");
const password=document.getElementById("surname");
const form=document.getElementById("form");
const error1=document.getElementsByClassName("error1");
error2=document.getElementsByClassName("error2");
error3=document.getElementsByClassName("error3");
error3=document.getElementsByClassName("error4");
error=document.getElementsByClassName("error");
form.addEventListener("submit",(e)=>{
    
    let messages=[]
    if(name.value===""||name.value==null){
messages.push('name is required');
    }
    if(surname.value===""||surname.value==null){
        messages.push('name is required');
            }




if(messages.length>0){
    e.preventDefault();
    
    
}



})
console.log("dziala")