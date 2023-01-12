let btnEnviar = document.querySelector("#btnEnviar");
toastr.options.positionClass = "toast-top-right";

btnEnviar.onclick = () => {
    toastr.success("Dados enviados com sucesso!");
}


