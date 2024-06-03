const form = document.getElementById('form-contato');
const imgFixo = '<img src="./images/telefone.png" alt="Imagem telefone fixo" />';
const imgCelular = '<img src="./images/celular.png" alt="Imagem aparelho celular" />';
const contatos = [];
const telefones = []

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

});

document.getElementById('telefone-contato').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '')
})

function adicionaLinha(){
    const nomeDoContato = document.getElementById('nome-contato');
    const numeroDoContato = document.getElementById('telefone-contato');


    if (contatos.includes(nomeDoContato.value)) {
        alert(`O contato: ${nomeDoContato.value} já foi adicionado`);
    } else {
        contatos.push(nomeDoContato.value);
        telefones.push(parseFloat(numeroDoContato.value));
        const telefoneNumeros = numeroDoContato.value.replace(/\D/g, '');
        let linha = '<tr>';
        linha += `<td>${nomeDoContato.value}</td>`;
        linha += `<td>${numeroDoContato.value}</td>`;
        if (telefoneNumeros.length === 10) {
            linha += `<td>${imgFixo}</td>`;
        } else if (telefoneNumeros.length === 11) {
            linha += `<td>${imgCelular}</td>`;
        } else {
            alertalert('O número de telefone deve conter 10 ou 11 dígitos.');
            contatos.pop();
            telefones.pop();
            return;
        }
        linha += '</tr>';

        linhas += linha;
    }

    nomeDoContato.value = '';
    numeroDoContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

