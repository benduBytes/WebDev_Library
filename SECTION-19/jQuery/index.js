// $(document).ready(function() {
//   $("h1").css("color", "red");
// });

//Manipulating Styles with jQuery
$("h1").css("color", "red");
console.log($("h1").css("color"));


$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");

//Manipulating Text with jQuery
$("button").text("Don't Click Me");
$("button").html("<em>Hey</em>");

//Manipulating Attributes with jQuery
$("img").attr("src");
$("a").attr("href", "https://www.yahoo.com");

//Adding Event Listeners with jQuery
$("h1").click(function() {
  $("h1").css("color", "purple");
});
// for(var i =0;i<document.querySelectorAll("button").length;i++){
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// }
$("button").click(function() {
    $("h1").css("color", "purple");
});
$("input").keypress(function(event) {
    $("h1").text(event.key);
});
$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
});

//Adding and Removing Elements with jQuery
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
//$("h1").remove();

//Website Animations with jQuery
// $("button").on("click", function() {
//     $("h1").toggle(); //hide the the h1 element
// });

// $("button").on("click", function() {
//     $("h1").slideToggle(); 
// });

// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5, margin: 20}); //the content in {} must hold a number value
// });

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: 20}); 
});

