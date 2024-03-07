let button = document.querySelector("button");
let result = document.querySelector(".result");
let worldChampPhoto = document.querySelector(".worldchamps");


button.onclick = function() {
    let q1 = document.querySelector(".q1").value;
    let q2 = document.querySelector(".q2").value;

    if (q1 === "5" && q2 === "Brazil") {
        result.innerHTML = "World champion ";
        worldChampPhoto.style.display = "block";
    } else if (q1 === "5" && q2 === "Argentina") {
        result.innerHTML = "you said " + q1 + "so u are Advanced ";

    } else if (q1 < 5 && q2 === "Brazil") {
        result.innerHTML = "you said " + q1 + "so u are Beginner";

    } else if (q1 > 5 && q2 === "Argentina") {
        result.innerHTML = "you said " + q1 + "so u are Medium";
    } else {
        result.innerHTML = "WUT?";
    }
    console.log(q1);
    console.log(q2);
};