function changeImage(spis){
    let el = document.getElementById("changeImg");
    currentImg = Math.floor(Math.random()*spis.length);
    el.src = spis[currentImg];
}


let Images = ['imgs/MainPic1.png','imgs/MainPic2.png','imgs/MainPic3.png','imgs/MainPic4.png','imgs/MainPic5.png']

window.addEventListener("load", (event) => {
    var id = document.getElementById('changeImg');
    if (id) {
        setInterval(changeImage, 7500, Images)
    }
});

  