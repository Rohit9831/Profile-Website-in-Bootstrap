let WelcomeBtn = document.querySelector('button')
WelcomeBtn.addEventListener ('click', InputMsg)

function InputMsg(){
    let name = prompt('Enter Your Name');
    WelcomeBtn.textContent = `Your Roll No. is 7 ${name}`    
}