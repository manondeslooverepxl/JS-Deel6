// https://randomuser.me/api/

document.getElementsByTagName("button")[0].addEventListener('click', randomUserOphalen);

function randomUserOphalen() {
    fetch('https://randomuser.me/api/')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error)
        })
}


