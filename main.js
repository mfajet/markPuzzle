var faceNum = Math.floor(Math.random()*61 + 1);
    if (faceBum == 13 || faceNum ==31){
        faceNum++;
    }
var image = new Image();
image.onload = cutImageUp;
image.src = '/markFaces/face' + faceNum + '.PNG';
var white = new Image();
white.onload = cropWhite;
white.src ="/white.PNG";

document.onkeydown = checkKey;
var emptyBox = 1;
function checkKey(e) {
    console.log(emptyBox);
    moveTo= emptyBox
    e = e || window.event;
    if (e.keyCode == '38') {//up
        if(emptyBox<7 && emptyBox){
            emptyBox = moveTo + 3;
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(emptyBox>3){
            emptyBox = moveTo - 3;
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
       if(emptyBox %3 !=0){
           emptyBox = moveTo + 1;
       }
    }
    else if (e.keyCode == '39') {
       // right arrow
       if(emptyBox %3 != 1){
           emptyBox = moveTo -1;
       }
    }
    if(moveTo != emptyBox){
        console.log(moveTo);
        console.log(emptyBox);
        var from = document.getElementById(emptyBox);
        var to = document.getElementById(moveTo);
        var fromSrc = from.src;
        from.src=whiteURL;
        to.src=fromSrc;
        from.style.width = "100px";
    }
}
var heightOfOnePiece;
var widthOfOnePiece;
numColsToCut = 3;
numRowsToCut = 3;
var whiteURL;
function cutImageUp() {
    widthOfOnePiece =this.width / 3;
    heightOfOnePiece=this.height / 3;
    var emptyPic = document.getElementById('1');
    emptyPic.style.width = "100px";
    emptyPic.style.height = "auto";
    var imagePieces = [];
        for(var y = 0; y < numRowsToCut; y++) {
            for(var x = 0; x < numColsToCut; x++) {

            var canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            var context = canvas.getContext('2d');
            context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            imagePieces.push(canvas.toDataURL());
        }
    }

    // imagePieces now contains data urls of all the pieces of the image

    // load one piece onto the page
    var used =[];
    for (var i = 0; i < 9; i++) {
        var r = Math.floor(Math.random() * 9);
        while(used.indexOf(r)!=-1){
            r= Math.floor(Math.random() * 9);
        }
        used.push(r)
    }
    var first = document.getElementById('1');
    first.src="";
    for (var i = 2; i < 10; i++){
        var anImageElement = document.getElementById(i);
        anImageElement.src = imagePieces[used[i-1]];
        anImageElement.style.width = "100px"
        anImageElement.style.height= "auto";
    }

}

function cropWhite() {

            var canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            var context = canvas.getContext('2d');
            context.drawImage(white, widthOfOnePiece, heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
            whiteURL = (canvas.toDataURL());
            var emptyPic = document.getElementById('1');
            emptyPic.src=whiteURL;
            emptyPic.style.width = "100px";
            emptyPic.style.height = "auto";


}
