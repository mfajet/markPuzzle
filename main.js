var image = new Image();
image.onload = cutImageUp;
image.src = '/face7.PNG';

numColsToCut = 3;
numRowsToCut = 3;
function cutImageUp() {
    widthOfOnePiece =this.width / 3;
    heightOfOnePiece=this.height / 3;
    var emptyPic = document.getElementById('empty');
    emptyPic.style.height = ""+heightOfOnePiece+"px";
    emptyPic.style.width = ""+widthOfOnePiece+"px";
    console.log(image);
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

    for (var i = 2; i < 10; i++){
        var anImageElement = document.getElementById(i);
        anImageElement.src = imagePieces[used[i-1]];
    }

}
