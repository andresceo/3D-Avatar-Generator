<style>
  /* Estilos Globales */
  body {
    font-family: Arial, sans-serif;
    background-color: #000; /* Fondo negro para resaltar los elementos */
    color: #fff; /* Texto blanco por defecto */
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    box-sizing: border-box; /* Incluye el padding en el tamaño total */
  }

  /* Contenedor Principal */
  .container {
    margin-top: 100px;
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
    background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
    background-position: center; /* Centra la imagen */
  }

  /* Nombre */
  .name {
    font-size: 20px;
    color: white;
    margin: 17px 0 10px;
  }

  /* Descripción */
  .description {
    font-size: 15px;
    color: white;
    margin: 7px 0 30px;
  }

  /* Rol */
  .role {
    font-size: 12px;
    color: gray;
    margin: 0 0 3px;
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
    background-color: rgba(255, 255, 255, 0.2);
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
    margin-top: 0; /* Espacio debajo de los botones */
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
    margin-right: -12px; /* Espacio a la derecha del círculo */
    transition: 0.4s ease;
  }

  .circle:nth-child(1):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .circle:nth-child(2) {
    background-image: url("https://i.pinimg.com/564x/d9/55/6c/d9556cfe0b0c8da4d4819986a174459f.jpg");
    margin-right: -12px; /* Espacio a la derecha del círculo */
    transition: 0.4s ease;
  }

  .circle:nth-child(2):hover {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .circle:nth-child(3) {
    background-image: url("https://i.pinimg.com/564x/2a/c0/ba/2ac0ba34844f518ea7b3112070934894.jpg");
    margin-right: -12px; /* Espacio a la derecha del círculo */
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
    color: black; /* Texto en negro para mejor contraste */
    margin-right: 4px; /* No se necesita margen a la derecha */
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
    margin-top: 11px; /* Espacio arriba del texto */
  }
</style>
</head>
<body>
<div class="container">
  <div class="avatar"></div>
  <p class="name">Evelyn Smith</p>
  <p class="description">
    2.425 Followers        377 Follow        14 Clubs
  </p>
  <p class="role">United States / Professional Signer</p>
  <p class="role">Rock, Pop & Alternative</p>
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
  <p class="text-below">Code Languages</p>
</div>
</body>
