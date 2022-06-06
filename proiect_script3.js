window.onload=function() {

    let body= document.getElementsByTagName("body")[0];
    var trigger=document.getElementById("aci");
    var number=0;
    trigger.onclick=function(event){
        var beer = document.createElement("img");
        number++;
        beer.src="LikePic.png";
        beer.className="beer";

        document.body.appendChild(beer);
        beer.onclick=function(event){
            document.body.removeChild(this);
            number--;
            event.stopPropagation();
        }
        event.stopPropagation();
    }

    }
