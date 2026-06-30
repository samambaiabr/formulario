const fromEx03 = document.getElementById("fromEx03");

fromEx03.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const ano = document.getElementById("ano");
    const genero = document.getElementById("genero");

    let formularioValido = true;

    if (titulo.value.trim() == "") {
        titulo.classList.add("is-invalid");
        titulo.classList.remove("is-valid");
        formularioValido = false;
    } else {
        titulo.classList.add("is-valid");
        titulo.classList.remove("is-invalid");
    }

    if (autor.value.trim() == "") {
        autor.classList.add("is-invalid");
        autor.classList.remove("is-valid");
        formularioValido = false;
    } else {
        autor.classList.add("is-valid");
        autor.classList.remove("is-invalid");
    }

    if (ano.value.trim() == "") {
        ano.classList.add("is-invalid");
        ano.classList.remove("is-valid");
        formularioValido = false;
    } else {
        ano.classList.add("is-valid");
        ano.classList.remove("is-invalid");
    }

    if (genero.value == "") {
        genero.classList.add("is-invalid");
        genero.classList.remove("is-valid");
        formularioValido = false;
    } else {
        genero.classList.add("is-valid");
        genero.classList.remove("is-invalid");
    }

    if (formularioValido) {
        fromEx03.reset();
    }
});-