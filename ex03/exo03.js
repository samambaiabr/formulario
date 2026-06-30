const fromEx03 = document.getElementById("fromEx03");

fromEx03.addEventListener("submit", function (evento) {


    evento.preventDefault();


    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const ano = document.getElementById("ano");
    const genero = document.getElementById("genero");

    if (titulo.value.trim() == "") {

        titulo.classList.add("is-invalid")
        titulo.classList.remove("is-valid")
    } else {

        titulo.classList.add("is-valid")
        titulo.classList.remove("is-invalid")
    }
    if (autor.value.trim() == "") {

        autor.classList.add("is-invalid")
        autor.classList.remove("is-valid")
    } else {

        ano.classList.add("is-valid");
        ano.classList.remove("is-invalid")
    }
    if (ano.value.trim() == "") {

        ano.classList.add("is-invalid")
        ano.classList.remove("is-valid")
    } else {

        ano.classList.add("is-valid");
        ano.classList.remove("is-invalid")
    }

    console.log("Cliente " + Cliente.value);
    console.log("Pizza " + Pizza.value);
    console.log("Pizza " + Pizza.value);

    
    if (genero.value == "") {

        genero.classList.add("is-invalid")
        genero.classList.remove("is-valid")
    } else {

        genero.classList.add("is-valid");
        genero.classList.remove("is-invalid")
    }

    
    console.log("Bebidas " + Bebidas.value);

});