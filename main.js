canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var color="red";
var line_width=2;
var radius="3";

var mouseEvent="";
var LastPositionX;
var LastPositionY;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("inputcolor").value;
    line_width=document.getElementById("line_width").value;
    radius=document.getElementById("Circle_radius").value;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    CurrentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    CurrentPositionOfMouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        CurrentPositionOfMouseX = e.clientX - canvas.offsetLeft;
        CurrentPositionOfMouseY = e.clientY - canvas.offsetTop;

        if(mouseEvent == "mousedown"){
            console.log("Current position of x and y coordinates=");
            console.log("x = " + CurrentPositionOfMouseX + "y = " + 
            CurrentPositionOfMouseY);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.line_width = line_width;
            ctx.arc(CurrentPositionOfMouseX,CurrentPositionOfMouseY, radius,0,2*Math.PI);
            ctx.stroke();
        }


    }
    LastPositionX=CurrentPositionOfMouseX;
    LastPositionY=CurrentPositionOfMouseY;
}

function clear_canvas(){
    ctx.clearRect(0,0, canvas.width,canvas.height);
}