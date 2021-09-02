class Form{
    constructor(){
    }
    display(){
        var title=createElement('h2');
        title.html("Multiplayer Moon Runner");
        title.position(200,100);

        var input=createInput("name");
        input.position(200,200);

        var button=createButton('Play');
        button.position(300,300);
        button.mousePressed(()=>{
            button.hide();
            input.hide();
            var greetings=createElement('h1');
            greetings.html("welcome");
            greetings.position(300,300);
        })
    }
}