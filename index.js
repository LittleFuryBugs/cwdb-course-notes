
//deprecated, using jquery below
//sets all links to open in a new tab

// var anchors = document.getElementsByTagName("a"); //this returns a collection, not an array
// console.log(anchors);

// for (const anchor of anchors) { //loops through a collection
//     anchor.setAttribute("target", "_blank");
//     anchor.setAttribute("rel", "noopener noreferrer");
// }

$("a").attr({
    target: "_blank",
    rel: "noopener noreferrer"
});

//unfinished. allows the code sections to have line breaks without having to type it in the html, by replacing all line breaks with <br>

// $(".code").each(function () {
//     var text = $(this).text()
//     text = text.replaceAll("\n", "<br>");
//     console.log(text);
// });