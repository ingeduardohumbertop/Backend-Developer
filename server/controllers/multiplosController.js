/** @format */

exports.index = (req, res) => {
    let valores = req.value;
    const limit = 100;
    const divisores = [3, 5];
    const textosAray = ["Music", "TI"];
    let numero;

    for (let index = 1; index < limit; index++) {
        valores.push(index);
    }

    valores.forEach((element) => {
        numero = element;
        divisores.forEach((divisor, index) => {
            var texto = textosAray[index];
            var index_numero = valores.indexOf(numero);

            if (numero % divisor == 0) {
                valores[index_numero] = texto;
            }
        });
    });

    return res.status(200).render("./../../views/index", {
        multiplos: valores,
    });
};