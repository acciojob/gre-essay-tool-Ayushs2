let etext=document.getElementById("evaluatedText");
let countw=document.getElementById("wordCount");

var c=0;

etext.addEventListener("keydown",(e)=>{
    if(e.key!='Backspace' && c>=0){
    c++;
    countw.innerHTML=c;
    }
    else{
        if(c)
        c--;
        countw.innerHTML=c;
        
    }

})