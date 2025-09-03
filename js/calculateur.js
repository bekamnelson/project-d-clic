let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

let montant= document.getElementById('montant').value;
let taux =( document.getElementById('taux').value)/1200;
let duree = document.getElementById('duree').value *12;
let resultat = document.getElementById('resultat');
if(montant == '' || taux=='' || duree==''){
    alert('veuiller entrer des informations');
}else{
    let montantMensuel = montant * (taux * (1 + taux)**duree) / (((1 + taux)**duree) - 1) ;
    resultat.value = montantMensuel;
}



});

