//code pour gerer une soumission de formulaire

document.getElementById('loginForm')?.addEventListener('submit', function(event)
{
    event.preventDefault();
    alert('Connexion reussie !!');

    window.location.href = 'HomePage.html';
});

document.getElementById('SignUpForm')?.addEventListener('submit', function(event)
{
    const Username = document.getElementById('Username').value;
    const mail = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;

    alert("inscription reussie ", Username, mail, password);

    window.location.href = 'HomePage.html';
});