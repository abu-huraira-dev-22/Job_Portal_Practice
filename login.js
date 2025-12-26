let emailLogin = document.querySelector('#email')
let passwordLogin = document.querySelector('#password')

document.querySelector('#loginBtn').addEventListener('click', function(){
    if(!emailLogin.value || !passwordLogin.value){
        return alert('All the fields are required to fill')
    }
    if(passwordLogin.value<8){
        return alert('Password is not correct')
    }
    let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []

    let isExists = allUsers.find(function(userData){
        return userData.email.toLowerCase() == emailLogin.value.toLowerCase()
    })

    if(!isExists) return alert('Please create your account first')
    if(isExists.password == passwordLogin.value){
        alert('Congratulations, we are signing you up')
        localStorage.setItem("loggedInUser", JSON.stringify(isExists))
        window.location = 'dashboard.html'
    }
    else{
        alert('Incorrect password')
    }
})