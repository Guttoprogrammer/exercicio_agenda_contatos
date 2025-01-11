const formContato = document.getElementById('form-contacts');
const tabelaContatos = document.querySelector('.table_div');
const corpoTabela = document.querySelector('tbody');

const nomes = [];
const numeros= [];
const emails =[];

let linhas = ''

formContato.addEventListener('submit',function (e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
} )

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato');

    if(numeros.includes(inputNumeroContato.value)){
        alert(`O Numero de contato : ${inputNumeroContato.value} já foi salvo uma vez.`)
    } else{
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
        emails.push(inputEmailContato.value);

        let linha = '<tr>'

        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += `<td><button class="remover">Remover</button></td>`
        linha += '</tr>'

        linhas += linha;

    }
    
    formContato.reset();
}


function atualizaTabela() {
    corpoTabela.innerHTML = linhas;
    
    corpoTabela.removeEventListener('click', removerLinha);
    corpoTabela.addEventListener('click', removerLinha);
}

function removerLinha(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.closest('tr').remove();  // Remove a linha inteira
    }
}
