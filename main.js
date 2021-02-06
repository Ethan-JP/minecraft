var canvas=new fabric.Canvas("myCanvas")
var playerX=100
var playerY=100
var blockwidth=30
var blockheight=30
var playerobject=""
var blockobject=""

function playerupdate(){
fabric.Image.fromURL("player.png",function(img){
    playerobject=img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(150);
    playerobject.set({
        top:playerY,left:playerX
    });
    canvas.add(playerobject)
});
}

function blockupdate(block) {
fabric.Image.fromURL(block,function(img){
    blockobject=img
    blockobject.scaleToWidth(blockwidth);
    blockobject.scaleToHeight(blockheight);
    blockobject.set({
        top:playerY,left:playerX
    });
    canvas.add(blockobject)
});
}

window.addEventListener("keydown",kd)
function kd(e) {
    number=e.keyCode
    console.log(number)

    if (number==67) {
        blockupdate("cloud.jpg")
        console.log("c is pressed")
    }

    if (number==68) {
        blockupdate("dark_green.png")
        console.log("d is pressed")
    }

    if (number==71) {
        blockupdate("ground.png")
        console.log("g is pressed")
    }

    if (number==76) {
        blockupdate("light_green.png")
        console.log("l is pressed")
    }

    if (number==82) {
        blockupdate("roof.jpg")
        console.log("r is pressed")
    }

    if (number==84) {
        blockupdate("trunk.jpg")
        console.log("t is pressed")
    }

if (number==85) {
    blockupdate("unique.png")
    console.log("u is pressed")
}

if (number==87) {
    blockupdate("wall.jpg")
    console.log("w is pressed")
}

if (number==89) {
    blockupdate("yellow_wall.png")
    console.log("y is pressed")
}

if (number==37) {
    left()
}
if (number==38) {
    up()
}

if (number==39) {
    right()
}

if (number==40) {
    down()
}

if (e.shiftKey==true && number==80) {
    blockwidth=blockwidth+10;
    blockheight=blockheight+10;
    document.getElementById("width").innerHTML=blockwidth
    document.getElementById("height").innerHTML=blockheight
    console.log("p and shift pressed together")
}

if (e.shiftKey==true && number==77) {
    blockwidth=blockwidth-10
    blockheight=blockheight-10
    document.getElementById("width").innerHTML=blockwidth
    document.getElementById("height").innerHTML=blockheight
    console.log("m and shift pressed together")
}
}

function right() {
    if (playerX<=700) {
        playerX=playerX+blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}

function left() {
    if (playerX>=0) {
        playerX=playerX-blockwidth
        canvas.remove(playerobject)
        playerupdate()
    }
}

function up() {
    if (playerY>=0) {
        playerY=playerY-blockheight
        canvas.remove(playerobject)
        playerupdate()
    }
}

function down(){
    if (playerY<=600) {
        playerY=playerY+blockheight
        canvas.remove(playerobject)
        playerupdate()
    }
}