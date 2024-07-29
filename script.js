document.getElementById('avatar-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtener valores del formulario
    const nickname = document.getElementById('nickname').value;
    const description = document.getElementById('description').value;
    const avatarUrl = document.getElementById('avatar').value;

    // Código del avatar con los valores reemplazados
    const avatarCode = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Avatar Hover</title>
<style>
body {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #000;
margin: 0;
font-family: Arial, sans-serif;
}
.avatar-container {
text-align: center;
position: relative;
display: inline-block;
perspective: 1500px;
}
.avatar-container img {
width: 100px;
height: 100px;
border-radius: 50%;
transition: transform 1s ease-in-out, box-shadow 1s ease-in-out;
transform-origin: center;
transform-style: preserve-3d;
}
.text-container {
position: absolute;
top: 120%;
left: 50%;
transform: translateX(-50%);
opacity: 0;
transition: top 1s ease-in-out, opacity 1s ease-in-out;
}
.text-container p {
margin: 5px 0;
white-space: nowrap;
}
.text-container .info {
color: grey;
font-size: 15px;
cursor: pointer;
margin-top: 15px;
}
.text-container .name {
color: white;
margin-top: 4px;
}
.text-container .description {
color: white;
margin-top: 5px;
}
@keyframes glow {
0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
50% { box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
}
.avatar-container:hover img {
transform: rotateX(15deg) rotateY(360deg) translateY(-120px);
box-shadow: 0 0 20px rgba(0, 255, 255, 1);
animation: glow 2s infinite;
}
.avatar-container:hover .text-container {
top: 0;
opacity: 1;
}
.text-container .info:hover {
color: #fff;
}
</style>
</head>
<body>
<div class="avatar-container">
<img src="${avatarUrl}" alt="Avatar">
<div class="text-container">
<p class="name">${nickname}</p>
<p class="description">${description}</p>
<p class="info" id="more-info">More info →</p>
</div>
</div>
</body>
</html>
    `;

    // Mostrar la previsualización en el iframe
    const previewFrame = document.getElementById('avatar-preview');
    previewFrame.srcdoc = avatarCode;

    // Cambiar el texto del botón a "Copy code" y añadir evento para copiar el código
    const generateButton = document.getElementById('generate-button');
    generateButton.textContent = 'Copy code';
    generateButton.addEventListener('click', function() {
        navigator.clipboard.writeText(avatarCode).then(function() {
            alert('Code copied to clipboard!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    }, { once: true }); // Asegura que el evento solo se agregue una vez
});
