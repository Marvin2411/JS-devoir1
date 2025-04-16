document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Ici, vous pouvez ajouter une logique pour traiter l'inscription (stockage des données, etc.)
    window.location.href = 'HomePage.html'; // Redirection vers la page d'accueil
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Ici, vous pouvez ajouter une logique pour traiter la connexion
    window.location.href = 'HomePage.html'; // Redirection vers la page d'accueil
});
