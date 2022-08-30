document.getElementById('cliqueaqui').onclick = function() {
    alert('Seja bem vindo!');
}

function create() {
    let texto = prompt("Digite o texto para o titulo!");

    let obj_titulo = document.createElement("h1");
    let obj_conteudo = document.createTextNode( texto ); obj_titulo.appendChild(obj_conteudo); document.body.appendChild(obj_titulo);
}