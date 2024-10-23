$('#exampleModal').on('shown.bs.modal', function () {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const name = document.getElementById('name-res').value;
        const email = document.getElementById('email-res').value;
        const phone = document.getElementById('phone-res').value;
        const typeVoiture = document.getElementById('type_voiture-res').value;
        const lieu = document.getElementById('lieu-prise-res').value;
        const dateEtHeure = document.getElementById('date-res').value;
        const lieuDepot = document.getElementById('Lieu-dépot-res').value;
        const message = document.getElementById('message-res').value;
    
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

        Email.send({
            SecureToken: "49a4c2c7-029d-4105-b671-27298e474e42",
            To: "akvtckedim75@gmail.com",
            ReplyTo: email,
            From: "booking@ak-vtc.com",
            Subject: `Nouvelle réservation de ${name}`,
            Body: ebody
        }).then(
            message => {
                if (message === 'OK') {
                    const successMsg = document.getElementById('alert-success-reservation');
                    successMsg.style.display = 'block';
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                        $('#exampleModal').modal('hide');
                    }, 2000);
                    form.find('input:not([type="submit"]), textarea').val('');
                } else {
                    alert('Erreur lors de l\'envoi de votre message : ' + message);
                }
            }
        );
    });
});