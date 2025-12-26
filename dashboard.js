const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

if(!loggedInUser) {
    window.location = 'login.html'
}

document.querySelector('h1').textContent = `Hi, Welcome Mr ${loggedInUser.firstName} ${loggedInUser.lastName}`