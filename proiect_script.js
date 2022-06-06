window.onload=function() {


    let body= document.getElementsByTagName("body")[0];

    let x=document.getElementById("like");
    const button =document.createElement("button");
    button.style.backgroundColor="darkblue";
    button.style.width="100px";
    button.innerText='0';
    button.style.color='white';
    button.onclick=function(event) {
        var c=parseInt(button.textContent);
        button.innerText=c+1;
        
            var lk = document.createElement("img");
           
            lk.src="LikePic.png";
            lk.className="likeee";
            lk.style.width='25px';
            lk.style.length='25px';
    
            x.appendChild(lk);
            lk.onclick=function(event){
                x.removeChild(this);
                
                event.stopPropagation();
            }
        event.stopPropagation();
    }


    x.appendChild(button);
   
    function MakeModel() {


        var input1=document.getElementById("marca");
        var input2=document.getElementById("model");
        var input3=document.getElementById("an");
        
        
        var div=document.getElementById("story");
        
        div.innerText="Masina dumneavoastra este marca "+input1.value+" modelul "+input2.value+" si a fost fabricata in anul "+input3.value+". ";
        var currentText=div.textContent;
        var complimente = ["Aveti o masina foarte interesanta!","Foarte tare!","Impresionant!","O masina foarte rara!", "Superba achizitie!",
        "Multi si-ar dori asa ceva!", "Un model foarte special!", "Una dintre cele mai frumoase masini!","Sa o stapaniti sanatos!","Foarte frumos automobil!"];
         
        div.innerText=currentText+complimente[Math.floor(Math.random() * 10)];
        const t=document.createElement("button");
        t.innerText='Sterge';
        t.addEventListener("click", function() { div.innerText='';});
        div.appendChild(t);
        }
    
    var b=document.getElementById("butonas");
    b.addEventListener("click", MakeModel);
    var y=document.getElementById("pov");
    y.appendChild(b);
    
}
    
