/** @format */
"use strict";

function loadNumber(req, res, next) {
    var valores = [];
    var limit = 100;
    for (let index = 1; index < limit; index++) {
        valores.push(index);
    }
    req.value = valores;
    next();
}

module.exports = {
    loadNumber,
};