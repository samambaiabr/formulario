const fromEx02 = document.getElementById("fromEx02");

fromEx02.addEventListener("submit", function (evento) {


    
    evento.preventDefault();
    

    const Cliente = document.getElementById("Cliente");
    const Pizza = document.getElementById("Pizza");
    const Tamanho = document.getElementById("Tamamho");
    const Bebidas = document.getElementById("Bebidas");

    if (Cliente.value.trim() == "") {

        Cliente.classList.add("is-invalid")
        Cliente.classList.remove("is-valid")
    } else {

        Cliente.classList.add("is-valid")
        Cliente.classList.remove("is-invalid")
    }
    if (Pizza.value.trim() == "") {

        Pizza.classList.add("is-invalid")
        Pizza.classList.remove("is-valid")
    } else {

        Pizza.classList.add("is-valid");
        Pizza.classList.remove("is-invalid")
    }

    console.log("Cliente " + Cliente.value);
    console.log("Pizza " + Pizza.value);

    if (Tamanho.value == "") {

        Tamanho.classList.add("is-invalid")
        Tamanho.classList.remove("is-valid")
    } else {

        Tamanho.classList.add("is-valid")
        Tamanho.classList.remove("is-invalid")
    }
    if (Bebidas.value == "") {

        Bebidas.classList.add("is-invalid")
        Bebidas.classList.remove("is-valid")
    } else {

        Bebidas.classList.add("is-valid");
        Bebidas.classList.remove("is-invalid")
    }

    console.log("Tamanho " + Tamanho.value);
    console.log("Bebidas " + Bebidas.value);

});