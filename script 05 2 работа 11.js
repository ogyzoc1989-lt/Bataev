let heading = document.querySelector("#heading");

document.querySelector("#color")
    .addEventListener("click", function () {
        heading.style.color = "red";
    });

document.querySelector("#background")
    .addEventListener("click", function () {
        document.body.style.backgroundColor = "pink";
    });