let btnEnviar = document.querySelector("#btnEnviar");
let inputNome = document.getElementById("nome");
toastr.options.positionClass = "toast-top-right";

btnEnviar.onclick = () => {
    if (!inputNome.value) {
        return toastr.error("Dados inválidos!");
    }

    toastr.success("Dados enviados com sucesso!");
};


