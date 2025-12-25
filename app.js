let userName = document.querySelector("#userName")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmPassword = document.querySelector("#confirmPassword")

document.querySelector("#signupBtn").addEventListener("click",function(){
    let allUsers = JSON.parse(localStorage.getItem("allUsers")) || []

    if(!userName.value || !firstName.value || !lastName.value || !email.value || !password.value || !confirmPassword.value){
        return alert("all fields are required")
    }
    if(password.value != confirmPassword.value){
        return alert("password and confirm password should be same")
    }
    if(password.value.length<8){
        return alert("password should be 8 characters long")
    }
    const userDetails={
        userName : userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    allUsers.push(userDetails)
    localStorage.setItem("allUsers",JSON.stringify(allUsers))
})
