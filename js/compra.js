document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#btn_agregar1").addEventListener("click", agregar1);
    document.querySelector("#btn_agregar2").addEventListener("click", agregar2);
    document.querySelector("#btn_agregar3").addEventListener("click", agregar3);
    document.querySelector("#btn_vaciar").addEventListener("click", vaciar);

    let compras = [];

    function agregar1() {
        if(producto.value.length > 0){

        let producto = document.querySelector("#producto").value;
        let itemNuevo = {
            producto: producto,
            cantidad: 1,
        }

        compras.push(itemNuevo);
        mostrarCompra();
    }
    }

    function agregar2() {
        if(producto.value.length > 0){

        let producto = document.querySelector("#producto").value;
        let itemNuevo = {
            producto: producto,
            cantidad: 2,
        }
        compras.push(itemNuevo);
        mostrarCompra();
    }
    }

    function agregar3() {
        if(producto.value.length > 0){

        let producto = document.querySelector("#producto").value;
        let itemNuevo = {
            producto: producto,
            cantidad: 3,
        }
        compras.push(itemNuevo);
        mostrarCompra();
    }
    }

    function mostrarCompra() {
        let listadoDom = document.querySelector("#listado")
        listadoDom.innerHTML = " ";
        for (const item of compras) { //El item es cada uno de los elementos del listado
            listadoDom.innerHTML += "<div>" + item.cantidad + " " + item.producto + "</div>";
        }

    }

    function vaciar() {
        compras = [];
        mostrarCompra();

    }
});