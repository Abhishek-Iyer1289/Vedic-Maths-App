var homePageBackground;
var TitleShow;
var Font1;
var Buttons;
var Button1ScreenVar, Button2ScreenVar, Button3ScreenVar, Button4ScreenVar, Button5ScreenVar, Button6ScreenVar;
var Chapter1_1, Chapter1_2, Chapter1_3, Chapter1_4, Chapter1_5, Chapter1_6, Chapter1_7, Chapter1_8, Chapter1_9, Chapter1_10, Chapter1_11, Chapter1_12, Chapter1_13;
var Chapter2_1, Chapter2_2, Chapter2_3, Chapter2_4;
var Chapter3_1, Chapter3_2, Chapter3_3;
var Chapter4_1, Chapter4_2, Chapter4_3, Chapter4_4, Chapter4_5, Chapter4_6, Chapter4_7, Chapter4_8, Chapter4_9, Chapter4_10, Chapter4_11, Chapter4_12, Chapter4_13, Chapter4_14, Chapter4_15, Chapter4_16, Chapter4_17, Chapter4_18, Chapter4_19, Chapter4_20, Chapter4_21;
var Chapter5_1, Chapter5_2, Chapter5_3, Chapter5_4, Chapter5_5;
var Chapter6_1, Chapter6_2, Chapter6_3, Chapter6_4, Chapter6_5, Chapter6_6, Chapter6_7;

function preload() {
    homePageBackground = loadImage("Home Page Background.jpeg");
    Font1 = loadFont("BRUSHSCI.ttf");

    Chapter1_1 = loadImage("Vedic Maths Chapter-1-01.jpg");
    Chapter1_2 = loadImage("Vedic Maths Chapter-1-02.jpg");
    Chapter1_3 = loadImage("Vedic Maths Chapter-1-03.jpg");
    Chapter1_4 = loadImage("Vedic Maths Chapter-1-04.jpg");
    Chapter1_5 = loadImage("Vedic Maths Chapter-1-05.jpg");
    Chapter1_6 = loadImage("Vedic Maths Chapter-1-06.jpg");
    Chapter1_7 = loadImage("Vedic Maths Chapter-1-07.jpg");
    Chapter1_8 = loadImage("Vedic Maths Chapter-1-08.jpg");
    Chapter1_9 = loadImage("Vedic Maths Chapter-1-09.jpg");
    Chapter1_10 = loadImage("Vedic Maths Chapter-1-10.jpg");
    Chapter1_11 = loadImage("Vedic Maths Chapter-1-11.jpg");
    Chapter1_12 = loadImage("Vedic Maths Chapter-1-12.jpg");
    Chapter1_13 = loadImage("Vedic Maths Chapter-1-13.jpg");

    Chapter2_1 = loadImage("Vedic Maths Chapter-2-1.jpg");
    Chapter2_2 = loadImage("Vedic Maths Chapter-2-2.jpg");
    Chapter2_3 = loadImage("Vedic Maths Chapter-2-3.jpg");
    Chapter2_4 = loadImage("Vedic Maths Chapter-2-4.jpg");

    Chapter3_1 = loadImage("Vedic Maths Chapter-3-1.jpg");
    Chapter3_2 = loadImage("Vedic Maths Chapter-3-2.jpg");
    Chapter3_3 = loadImage("Vedic Maths Chapter-3-3.jpg");

    Chapter4_1 = loadImage("Vedic Maths Chapter-4-01.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-02.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-03.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-04.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-05.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-06.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-07.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-08.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-09.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-10.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-11.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-12.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-13.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-14.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-15.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-16.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-17.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-18.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-19.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-20.jpg");
    Chapter4_1 = loadImage("Vedic Maths Chapter-4-21.jpg");

    Chapter5_1 = loadImage("Vedic Maths Chapter-5-1.jpg");
    Chapter5_1 = loadImage("Vedic Maths Chapter-5-2.jpg");
    Chapter5_1 = loadImage("Vedic Maths Chapter-5-3.jpg");
    Chapter5_1 = loadImage("Vedic Maths Chapter-5-4.jpg");
    Chapter5_1 = loadImage("Vedic Maths Chapter-5-5.jpg");

    Chapter6_1 = loadImage("Vedic Maths Chapter-6-1.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-2.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-3.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-4.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-5.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-6.jpg");
    Chapter6_1 = loadImage("Vedic Maths Chapter-6-7.jpg");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-147.5);
    Buttons = new Button();

    Button1ScreenVar=new Button1Screen();
    Button2ScreenVar=new Button2Screen();
    Button3ScreenVar=new Button3Screen();
    Button4ScreenVar=new Button4Screen();
    Button5ScreenVar=new Button5Screen();
    Button6ScreenVar=new Button6Screen();
    
    TitleShow = 0;

}

function draw(){
    background(homePageBackground);
    fill("blue");
    textSize(60);
    textAlign(CENTER);
    textFont(Font1);
    if (TitleShow===0){
    text("Sutras of Vedic Mathematics", displayWidth/2, 75);
    }
    
    Buttons.display();

}
