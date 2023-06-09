// Módulos de Node.js
const process = require("process");

// Módulos de terceros
const express = require("express");
const methodOverride = require("method-override");
require('dotenv').config();
const cors = require('cors')

// Rutas
const  userRouter  = require("./routes/user");

const app = express();

// Configuración
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(cors());

// Rutas
app.use(`/api/users`, userRouter);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));