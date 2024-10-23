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

    Email.send({
        SecureToken: "49a4c2c7-029d-4105-b671-27298e474e42",
        To: "akvtckedim75@gmail.com",
        ReplyTo: email,
        From: "booking@ak-vtc.com",
        Subject: `Message de Contact: ${subject}`,
        Body: ebody
    }).then(
        message => {
            if (message === 'OK') {
                document.querySelector('.contact__msg').innerText = 'Votre message a été envoyé avec succès.';
                form.reset();
            } else {
                alert('Erreur lors de l\'envoi de votre message : ' + message);
            }
        }
    );
});
