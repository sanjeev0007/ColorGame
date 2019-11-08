var numSquare=6;
var color=generaterandomColor(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var displayColor=document.getElementById("displayColor");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquare=3;
    color=generaterandomColor(numSquare);
    pickedColor=pickColor();
    displayColor.textContent=pickedColor;
    for(var i=0;i<squares.length;++i){
        if(color[i]){
            squares[i].style.backgroundColor=color[i];
        }else{
            squares[i].style.display="none";
        }
    }
});
})


resetButton.addEventListener("click",function(){
    //generate new color
    color=generaterandomColor(numSquare);
    //
    pickedColor=pickColor();
    
    displayColor.textContent=pickedColor;
    messageDisplay.textContent="";
    this.textContent="New Color";
    for(var i=0;i<squares.length;++i){
        squares[i].style.backgroundColor=color[i];}

    h1.style.backgroundColor="steelblue";
    });

displayColor.textContent=pickedColor;

for(var i=0;i<squares.length;++i){
    squares[i].style.backgroundColor=color[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent="CORRECT!!!";
            resetButton.textContent="Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";}
    });

}

function changeColors(color){
    
    for(var i = 0; i < squares.length; i++)

    squares[i].style.backgroundColor=color;
}
function pickColor(){
    
    var random=Math.floor(Math.random()*color.length);
    return color[random];
}

function generaterandomColor(num){
    var arr=[];
    for(var i=0;i<num;++i)
    //randomColor() is added to the empty array
    arr.push(randomColor());
    return arr;


}

function randomColor(){
    // random number for r
    var r=Math.floor(Math.random()*256);
    // random number for g
    var g=Math.floor(Math.random()*256);
    // random number for b
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")"
}
