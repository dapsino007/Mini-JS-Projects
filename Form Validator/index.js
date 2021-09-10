const form = document.querySelector('.form');
const inputBox = document.querySelectorAll('input');
const errorMessage = document.querySelectorAll('small');
const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const username = 0;
const email = 1;
const password = 2;
const password2 = 3;

//Check for empty input and character number
function checkChar(input, min, max){
  for(var i=0; i<inputBox.length; i++){
    if(inputBox[i].value === ''){
      inputBox[i].parentElement.classList.add('error');
      errorMessage[i].innerText = `${input[i]} is required`;
    }
    else if(inputBox[i].value.length < min[i]){
      inputBox[i].parentElement.classList.add('error');
      errorMessage[i].innerText = `${input[i]} must be at least ${min[i]} character`;
    }
    else if(inputBox[i].value.length > max[i]){
      inputBox[i].parentElement.classList.add('error');
      errorMessage[i].innerText = `${input[i]} must be less than ${max[i]} character`;
    }
    else{
      inputBox[i].parentElement.classList.add('success');
      inputBox[i].parentElement.classList.remove('error');
    }
  }
}

//Confirm password
function validatePassword(){
  if(inputBox[password].value !== inputBox[3].value){
    inputBox[password2].parentElement.classList.add('error');
    errorMessage[password2].innerText = `Passwords do not match`;
  }
  else{
    inputBox[password2].parentElement.classList.add('success');
  }
}

//check Email
function validateEmail(message){
  if(inputBox[email].value.match(emailFormat)){
    inputBox[email].parentElement.classList.add('success');
  }
  else{
    inputBox[email].parentElement.classList.add('error');
    errorMessage[email].innerText = message;
  }
}

//Validate inputs when 'submit' clicked
form.addEventListener('submit', function(e){
  e.preventDefault();
  validateEmail('Email is not valid');
  checkChar(['Username', 'Email', 'Password', 'Confirm Password'], [3, 0, 6, 0], [15,500,30,500]);
  validatePassword();
})
