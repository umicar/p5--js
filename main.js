function preload(){
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.position(400,300);
    img=createCapture(VIDEO);
    img.hide();
    filter_color="";
}

function draw(){
    image(img,0,0,600,400);
    tint(filter_color);
}

function take_snapshot(){
    save('family.jpg');
}

function apply_filter(){
    filter_color=document.getElementById("color").value;
}