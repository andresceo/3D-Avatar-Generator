   
<style>
/* Estilos Globales */
body {
    font-family: Arial, sans-serif;
    background-color: #fff;
    color: #fff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box;
}

/* Contenedor Principal */
.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
}

/* Avatar */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
    background-image: url("https://i.pinimg.com/564x/c5/12/d5/c512d565819e2ed28ad59c137bd96900.jpg");
    background-size: cover;
    background-position: center;
}

/* Nombre */
.name {
    font-size: 20px;
    color: #000;
}

/* Descripción */
.description {
    font-size: 15px;
    color: #000;
}

/* Rol */
.role {
    font-size: 12px;
    color: gray;
}

.text-below:hover {
    color: #000;
    cursor: pointer;
}

/* Botones */
.buttons {
    display: flex;
    gap: 10px;
    margin: 25px 0 30px;
}

.buttons button {
    font-size: 15px;
    padding: 10px 20px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.4s ease;
}

.buttons button:hover {
    background-color: white;
    color: black;
}

/* Contenedor de Imágenes Circulares */
.circle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
}

.circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

/* Posicionamiento de cada círculo */
.circle:nth-child(1) {
    background-image: url("https://i.pinimg.com/564x/0c/b6/0d/0cb60d78ec264489dadc9eb8f3172815.jpg");
    margin-right: -12px;
    transition: 0.4s ease;
}

.circle:nth-child(1):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
}

.circle:nth-child(2) {
    background-image: url("https://i.pinimg.com/564x/d9/55/6c/d9556cfe0b0c8da4d4819986a174459f.jpg");
    margin-right: -12px;
    transition: 0.4s ease;
}

.circle:nth-child(2):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
}

.circle:nth-child(3) {
    background-image: url("https://i.pinimg.com/564x/2a/c0/ba/2ac0ba34844f518ea7b3112070934894.jpg");
    margin-right: -12px;
    transition: 0.4s ease;
}

.circle:nth-child(3):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
}

/* Nuevo Círculo Blanco */
.circle:nth-child(4) {
    background-color: white;
    color: black;
    margin-right: 4px;
    transition: 0.4s ease;
}

.circle:nth-child(4):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
    font-size: 35px;
}

/* Texto debajo de los círculos */
.text-below {
    color: gray;
    font-size: 14px;
    margin-top: 11px;
}
</style>
</head>
<body>
<div class="container">
    <div class="avatar"></div>
    <p style="margin-bottom: 5px;" class="name">Evelyn Smith</p>
    <p class="description">
        2.425 Followers 377 Follow 14 Clubs
    </p>
    <p style="margin-bottom: 0;" class="role">United States / Professional Signer</p>
    <p style="margin-bottom: 15px;" class="role">Rock, Pop & Alternative</p>
    <div class="buttons">
        <button>MUSIC ®</button>
        <button>ABOUT ⊙⊛</button>
    </div>
    <!-- Nueva sección con las imágenes circulares -->
    <div class="circle-container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle">+3</div> <!-- Nuevo círculo con texto -->
    </div>
    <!-- Texto debajo de los círculos -->
    <p style="margin-top: 7px;" class="text-below">Code Languages</p>
</div>
</body>
</html>
   
