// Sélectionner le formulaire et ajouter un écouteur d'événement pour l'envoi
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name-contact').value;
    const email = document.getElementById('email-contact').value;
    const phone = document.getElementById('phone-contact').value;
    const subject = document.getElementById('subject-contact').value;
    const message = document.getElementById('message-contact').value;

    // Construire le corps de l'email
    let ebody = `
        <h1>Nouveau Message de Contact</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    // Envoyer l'email avec SMTP.js
    Email.send({
        SecureToken: "F57671126044A25B55950965357EF2D0E128",
        To: "omarbensghaier0@gmail.com", // Remplace par l'adresse de destination
        ReplyTo: email, // L'adresse email de l'utilisateur pour qu'on puisse répondre directement à lui
        From: "omarbensghaier0@gmail.com", 
        Subject: `Message de Contact: ${subject}`,
        Body: ebody
    }).then(
        message => {
            if (message === 'OK') {
                document.querySelector('.contact__msg').style.display = 'block';
                document.querySelector('.contact__msg').innerText = 'Votre message a été envoyé avec succès.';
                form.reset(); // Réinitialiser le formulaire après l'envoi
            } else {
                alert('Erreur lors de l\'envoi de votre message : ' + message);
            }
        }
    );
});
