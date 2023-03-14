const form= document.getElementById('form');
const name= document.getElementById('name').value;
const email= document.getElementById('email').value;



form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputName= event.target.name.value;
    const inputEmail= event.target.email.value;
    
    localStorage.setItem('name', inputName)
    localStorage.setItem('email', inputEmail)

})