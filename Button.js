class Button {

    constructor() {
      this.button1 = createButton('Chapter 1-');
      this.button2 = createButton('Chapter 2-');
      this.button3 = createButton('Chapter 3-');
      this.button4 = createButton('Chapter 4-');
      this.button5 = createButton('Chapter 5-');
      this.button6 = createButton('Chapter 6-');
    }
    /*hide(){
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.button4.hide();
      this.button5.hide();
      this.button6.hide();
    }*/
  
    display(){
      this.button1.position(displayWidth/3, 200);
      this.button2.position(displayWidth/3, 250);
      this.button3.position(displayWidth/3, 300);
      this.button4.position(displayWidth*2/3, 200);
      this.button5.position(displayWidth*2/3, 250);
      this.button6.position(displayWidth*2/3, 300);
    this.button1.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide(); 
        TitleShow = 1;
        Button1ScreenVar.display();
    });
    this.button2.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide(); 
        TitleShow = 1;
        Button2ScreenVar.display();
    });
    this.button3.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide(); 
        TitleShow = 1;
        Button3ScreenVar.display();
    });
    this.button4.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide(); 
        TitleShow = 1;
        Button4ScreenVar.display();
    });
    this.button5.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide(); 
        TitleShow = 1;
        Button5ScreenVar.display();
    });
    this.button6.mousePressed(()=>{
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button6.hide();
        TitleShow = 1;
        Button6ScreenVar.display();
    });
      }
  
      
  
      
    }
  
  