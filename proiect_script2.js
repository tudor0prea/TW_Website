window.onload=function() {
    let body= document.getElementsByTagName("body")[0];
            document.getElementById("myBtn").addEventListener("click", function() {   var culori=["red","green","orange","pink","purple","yellow","aquamarine","blue","white","beige"];
            document.body.style.backgroundColor= culori[Math.floor(Math.random() * 10)]; })
            document.getElementById("myBtn2").addEventListener("click", function() {document.body.style.backgroundColor="rgb(102, 102, 102)";});
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
                
                event.stopPropagation(); }
        event.stopPropagation();
    }
            
    x.appendChild(button);

    // var imagine=document.getElementsByClassName("image-class")[0];
    // imagine.onmouseover=function(event) {
    //     this.src="https://th.bing.com/th/id/OIP.kU8ETVD76FzFmvQ4Pd3r0QHaD0?pid=ImgDet&rs=1"; 
    //     event.stopPropagation();}
}