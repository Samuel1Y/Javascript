//MAKE THE MAGIC HAPPEN
//apples made by Samuel
var $;
var x,y;
//apple moves to basket on click
$("#apple1").click(function(){
$("#apple1").animate({left: '320px', top: '625px'}) // position of the basket
});

$("#apple2").click(function(){
$("#apple2").animate({left: '370px', top: '625px'})
});

$("#apple3").click(function(){
$("#apple3").animate({left: '420px', top: '625px'})
});
//.ready means when the website loads
$(".apple").ready(function(){
    $(".apple").hide()
    x = Math.floor(Math.random() * 600) + 80; //random number from 80 to 600
    y = Math.floor(Math.random() * 350) + 30; // random number from 30 to 350
    $("#apple1").animate({right: x, top: y}) // set position of apple1 to x,y
    x = Math.floor(Math.random() * 600) + 80;
    y = Math.floor(Math.random() * 350) + 30;
    $("#apple2").animate({right: x, top: y})
    x = Math.floor(Math.random() * 600) + 80;
    y = Math.floor(Math.random() * 350) + 30;
    $("#apple3").animate({right: x, top: y})
    $(".apple").show(300) // apples show on the tree with set positions
});