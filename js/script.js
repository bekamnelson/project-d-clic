
    let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let nom = document.getElementById('nom').value.trim();
    let prenom = document.getElementById('prenom').value.trim();
    let sujet = document.getElementById('sujet').value.trim();
    let text = document.getElementById('text').value.trim();
    if(nom=="" || prenom=="" || sujet=="" ||text==""){
        alert("veuillez renseignez tout les champ");
    }
})