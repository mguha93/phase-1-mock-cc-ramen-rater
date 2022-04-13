document.addEventListener("DOMContentLoad", () => {
    const form = document.querySelector("#create-ramen-menu")
    console.log("", form)
    form.addEventListener("submit", function(event) {
        const description = document.getElementById("ramen-menu")
        let name = document.createElement("li")
        name.innerText = description.velue
        event.fetch();
        document.getElemeentById("ramen-menu").appendChild(name) //add to ramen menu
        event.target.removeEventListener()
    });
})


//Call fetch(), passing in the URL. 

function RamenMenu 
fetch('http://localhost:3000') {
.then(function (data) {
    return data.json();
})
.then(function(data) {
    console.log(data);
    data.results.forEach(photo => {
        let result = '
        <img src="${photo.urls.regular}">
        <a href="${photo.links.download}"
    }
        document.getElementById()
s