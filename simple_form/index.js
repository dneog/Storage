const form= document.getElementById('form');
const name= document.getElementById('name')
const email= document.getElementById('email');



form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputName= event.target.name.value;
    const inputEmail= event.target.email.value;

    const obj={
        inputName,
        inputEmail
    }
    localStorage.setItem('userDetails', JSON.stringify(obj))
   

})