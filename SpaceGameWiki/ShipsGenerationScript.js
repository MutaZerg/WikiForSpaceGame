function readTextFile() {
    var opened = window.open("");
    fetch("./pageGeneration/ships.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error
                (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) =>{
        data.forEach(element => {
            addArticle(element);
        });
    })
    .catch((error) =>
        console.error("Unable to fetch data:", error));
  }

function addArticle(Obj){
    document.getElementById('Generate').innerHTML += '<article id="'+Obj.Image+'"><section ><img class="AddImage" src="imgs/'+Obj.Image+'" alt="'+Obj.Name+'"><article><h3>'+Obj.Name+'</h3><h3>Фракция: '+Obj.Fraction+'</h3><p>'+Obj.Text+'</p></article></section></article>';
    document.getElementById("AsideNav").innerHTML += '<li> <a href="#'+Obj.Image+'">'+Obj.Name+'</a> </li>';
}
window.addEventListener("load", (event) => {
    readTextFile();
  });