// var content = document.getElementById('content');
// var title = document.getElementById('title-paragraph').innerHTML;
// var paragraph = document.getElementById('paragraph-lorem').innerHTML;

// console.log(title);
// console.log(content);
// console.log(paragraph);

// for (i = 0; i < 3; i++) {
//     content.innerHTML = content.innerHTML + title + "<br>" + paragraph;
// }

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}