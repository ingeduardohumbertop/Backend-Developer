/** @format */

"use strict";

// Se agrega express para creación de rutas
var express = require("express");
// Se agrega el archivo que contiene las funciones que serán utilizadas
var multiplosController = require("../controllers/multiplosController");
// Se agrega el router
var api = express.Router();

api.get("/", multiplosController.index);

// Se exporta la configuración
module.exports = api;