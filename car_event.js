canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1="c1.png";
car1_x=10;
car1_y=10;
car1_width=130;
car1_height=85;
car2="c2.png";
car2_x=10;
car2_y=100;
car2_width=130;
car2_height=85;
background_racing="racing.jpg"
function add(){
    background_img=new Image();
    background_img.onload=upload_background;
    background_img.src=background_racing;

    car1_img=new Image();
    car1_img.onload=upload_c1;
    car1_img.src=car1;
    car2_img=new Image();
    car2_img.onload=upload_c2;
    car2_img.src=car2;
}
function upload_background(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function upload_c1(){
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function upload_c2(){
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    var KeyPress = e.keyCode;
    console.log(KeyPress);
    if(KeyPress=='38'){
        up();
        console.log("up");
    }
    if(KeyPress=='40'){
        down();
        console.log("down");
    }
    if(KeyPress=='37'){
        left();
        console.log("left");
    }
    if(KeyPress=='39'){
        right();
        console.log("right");
    }
}
