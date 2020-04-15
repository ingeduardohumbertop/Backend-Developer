/** @format */

"use strict";

// Se agrega express para creación de rutas
const express = require("express");

// Se agrega el archivo que contiene las funciones que serán utilizadas

const MultiplosController = require("../controllers/multiplosController");
const Load = require("../middleware/load");
// Se agrega el router
const api = express.Router();

api.get("/", Load.loadNumber, MultiplosController.index);

// Se exporta la configuración
module.exports = api;