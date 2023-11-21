<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de contact</title>
</head>
<body>

    <h2>Contactez-nous</h2>

    <form action="traitement.php" method="post">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required><br>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message :</label>
        <textarea id="message" name="message" rows="4" required></textarea><br>

        <input type="submit" value="Envoyer">
    </form>

</body>
</html>
