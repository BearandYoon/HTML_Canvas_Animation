var canvas_div1, canvas1, stage1, container1, bUpdate1 = false;
var canvas_div2, canvas2, stage2, container2, bUpdate2 = false;

function initcanvas1() {
    canvas_div1 = document.getElementById('home-mainbanner clearfix');
    width = canvas_div1.offsetWidth;
    height = canvas_div1.offsetHeight - 100;
    canvas_div1.style.height = height+'px';
    canvas1 = document.getElementById("first_canvas");

    canvas1.width = width;
    canvas1.height = height;

    stage1 = new createjs.Stage(canvas1);

    var image = new Image();
    image.src = "images/bubble.png";
    image.onload = onImageLoad1;
}

function onImageLoad1(event) {
   var image = event.target;
   var bitmap;
   container1 = new createjs.Container();
   stage1.addChild(container1);
   container1.cache(0, 0, canvas1.width, canvas1.height);

   for(var i = 0; i < 5; i++) {
        bitmap = new createjs.Bitmap(image);
        container1.addChild(bitmap);
        var flag;
       flag = Math.round(Math.random());//output is 0 or 1
       if(flag) {
           bitmap.x = -120;
           bitmap.y = canvas1.height * Math.random();
       }
       else {
           bitmap.x = canvas1.width * Math.random();
           bitmap.y = -120;
       }
       bitmap.rotation = 360 * Math.random() | 0;
        bitmap.regX = bitmap.image.width / 2 | 0;
        bitmap.regY = bitmap.image.height / 2 | 0;
        bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.8 + 0.6;
   }

   createjs.Ticker.addEventListener("tick", tick1);
   createjs.Ticker.setFPS(20);
}

function handleMouseOver1(event) {
   bUpdate1 = true;
}

function handleMouseOut1(event) {
   bUpdate1 = false;
}

function tick1(event) {
   // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if(bUpdate1) {
        container1.updateCache();
        // if you omit the compositeOperation param in updateCache, it will clear the existing cache, and draw into it:
        // in this demo, that has the effect of showing just the star that was drawn each tick.
        // shape.updateCache();
//       container.clearRect(0,0,canvas.width, canvas.height);
        // because the vector star has already been drawn to the cache, we can clear it right away:
//       container.graphics.clear();
        var count = container1.getNumChildren();

        // iterate through all the children and move them according to their velocity:
        for (var i = 0; i < count; i++) {
            var bubble = container1.getChildAt(i);
            if(bubble.x > 0)
                bubble.x = (canvas1.width + (bubble.x + Math.random() * 2)) % canvas1.width;
            else
                bubble.x = bubble.x + Math.random() * 2;
            if(bubble.y > 0)
                bubble.y = (canvas1.height + (bubble.y + Math.random() * 2)) % canvas1.height;
            else
                bubble.y = bubble.y + Math.random() * 2;
            bubble.rotation = bubble.rotation + Math.random() * 2;
        }

        stage1.update(event);
    }
}


function initcanvas2() {
    canvas_div2 = document.getElementById('homebot-footerbg clearfix');
    width = canvas_div2.offsetWidth;
    height = canvas_div2.offsetHeight;
    canvas_div2.style.height = height+'px';
    canvas2 = document.getElementById("second_canvas");

    canvas2.width = width;
    canvas2.height = height;

    stage2 = new createjs.Stage(canvas2);

    var image = new Image();
    image.src = "images/bubble.png";
    image.onload = onImageLoad2;
}

function onImageLoad2(event) {
    var image = event.target;
    var bitmap;
    container2 = new createjs.Container();
    stage2.addChild(container2);
    container2.cache(0, 0, canvas2.width, canvas2.height);

    for(var i = 0; i < 5; i++) {
        bitmap = new createjs.Bitmap(image);
        container2.addChild(bitmap);
        var flag;
        flag = Math.round(Math.random());//output is 0 or 1
        if(flag) {
            bitmap.x = -120;
            bitmap.y = canvas1.height * Math.random();
        }
        else {
            bitmap.x = canvas1.width * Math.random();
            bitmap.y = -120;
        }
        bitmap.rotation = 360 * Math.random() | 0;
        bitmap.regX = bitmap.image.width / 2 | 0;
        bitmap.regY = bitmap.image.height / 2 | 0;
        bitmap.scaleX = bitmap.scaleY = bitmap.scale = Math.random() * 0.8 + 0.6;
    }

    createjs.Ticker.addEventListener("tick", tick2);
    createjs.Ticker.setFPS(20);
}

function handleMouseOver2(event) {
    bUpdate2 = true;
}

function handleMouseOut2(event) {
    bUpdate2 = false;
}

function tick2(event) {
    // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
    if(bUpdate2) {
        container2.updateCache();
        // if you omit the compositeOperation param in updateCache, it will clear the existing cache, and draw into it:
        // in this demo, that has the effect of showing just the star that was drawn each tick.
        // shape.updateCache();
//       container.clearRect(0,0,canvas.width, canvas.height);
        // because the vector star has already been drawn to the cache, we can clear it right away:
//       container.graphics.clear();
        var count = container2.getNumChildren();

        // iterate through all the children and move them according to their velocity:
        for (var i = 0; i < count; i++) {
            var bubble = container2.getChildAt(i);
            if(bubble.x > 0)
                bubble.x = (canvas1.width + (bubble.x + Math.random() * 2)) % canvas1.width;
            else
                bubble.x = bubble.x + Math.random() * 2;
            if(bubble.y > 0)
                bubble.y = (canvas1.height + (bubble.y + Math.random() * 2)) % canvas1.height;
            else
                bubble.y = bubble.y + Math.random() * 2;
            bubble.rotation = bubble.rotation + Math.random() * 2;
        }

        stage2.update(event);
    }
}
