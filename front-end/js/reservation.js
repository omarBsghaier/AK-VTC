// Sélectionner le formulaire et ajouter un écouteur d'événement pour l'envoi
$('#exampleModal').on('shown.bs.modal', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        // Récupérer les valeurs des champs du formulaire
        const name = document.getElementById('name-res').value;
        const email = document.getElementById('email-res').value;
        const phone = document.getElementById('phone-res').value;
        const typeVoiture = document.getElementById('type_voiture-res').value;
        const lieu = document.getElementById('lieu-prise-res').value;
        const dateEtHeure = document.getElementById('date-res').value;
        const lieuDepot = document.getElementById('Lieu-dépot-res').value;
        const message = document.getElementById('message-res').value;
    
        // Construire le corps de l'email
        let ebody = `
            <h1>Nouvelle Réservation</h1>
            <p><strong>Nom et Prénom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Type de Voiture:</strong> ${typeVoiture}</p>
            <p><strong>Lieu de Prise en Charge:</strong> ${lieu}</p>
            <p><strong>Date et Heure:</strong> ${dateEtHeure}</p>
            <p><strong>Lieu de Dépôt:</strong> ${lieuDepot}</p>
            <p><strong>Note Supplémentaire:</strong> ${message}</p>
        `;
    
        // Envoyer l'email avec SMTP.js
        Email.send({
            SecureToken: "F57671126044A25B55950965357EF2D0E128",
            To: "omarbensghaier0@gmail.com", // Remplace par l'adresse de destination
            ReplyTo: email, // L'adresse email de l'utilisateur pour qu'on puisse répondre directement à lui
            From: "omarbensghaier0@gmail.com", 
            Subject: `Nouvelle réservation de ${name}`,
            Body: ebody
        }).then(
            message => {
                if (message === 'OK') {
                    // Afficher un message de succès
                    document.querySelector('.contact__msg').style.display = 'block';
                    document.querySelector('.contact__msg').innerText = 'Votre message a été envoyé avec succès.';
                    form.reset(); // Réinitialiser le formulaire après l'envoi
                } else {
                    alert('Erreur lors de l\'envoi de votre message : ' + message);
                }
            }
        );
    });
    
});