

let value = Math.floor(Math.random()*100);

let form = document.getElementById('form');
form.addEventListener('submit' , function(e){
       e.preventDefault();
       let resultat  = document.getElementById('resultat');
let nombre = document.getElementById('nombre').value;
if (nombre<value) {
       
        resultat.value = "votre nombre est plus petit que le nombre chercher";
        
    } else if(nombre > value) {
                       resultat.value = "votre nombre est plus grand que le nombre chercher";
    }else{
            alert("vous avez trouvée le nombre");
          alert("pret pour une nouvelle partie");
           value = Math.floor(Math.random()*100);
           nombre.value = "";
           resultat.value ='';

    }
});

 
    

