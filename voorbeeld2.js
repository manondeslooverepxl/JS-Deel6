document.getElementsByTagName("button")[0].addEventListener("click", randomUserOphalen);

function randomUserOphalen() {
    fetch('https://randomuser.me/api/')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.getElementsByTagName("p")[0].innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
        })
        .
        catch(function (error) {
            console.log(error)
        })
}