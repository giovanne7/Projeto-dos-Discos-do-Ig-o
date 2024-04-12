/* 

Aqui só tem algumas funções que eu estava testando, deixei porque vai que encontram algo de útil aqui

document.addEventListener('DOMContentLoaded', function() {
    // Simulação de um banco de dados de discos
    let discos = [];

    const addRecordForm = document.getElementById('addRecordForm');
    const recordList = document.getElementById('recordList');

    // Função para adicionar um novo disco
    function adicionarDisco(evento) {
        evento.preventDefault();
        const titulo = document.getElementById('title').value;
        const artista = document.getElementById('artist').value;
        const ano = document.getElementById('year').value;
        const imagem = document.getElementById('image').files[0];
        const musicas = document.getElementById('songs').value.split('\n').map(musica => musica.trim());

        // Simulação de um objeto de disco
        const disco = { titulo, artista, ano, imagem, musicas };
        discos.push(disco);

        // Atualiza a lista de discos na página
        atualizarListaDeDiscos();

        // Limpa o formulário
        addRecordForm.reset();
    }

    // Função para atualizar a lista de discos na página
    function atualizarListaDeDiscos() {
        recordList.innerHTML = '';
        discos.forEach((disco, indice) => {
            const itemDeLista = criarItemDeLista(disco, indice);
            recordList.appendChild(itemDeLista);
        });
    }

    // Função para criar um item de lista de disco
    function criarItemDeLista(disco, indice) {
        const itemDeLista = document.createElement('li');
        itemDeLista.classList.add('recordItem');

        const conteudo = `
            <div>
                <img src="${URL.createObjectURL(disco.imagem)}" alt="${disco.titulo}">
                <div class="recordInfo">
                    <strong>Título:</strong> ${disco.titulo}<br>
                    <strong>Artista:</strong> ${disco.artista}<br>
                    <strong>Ano:</strong> ${disco.ano}<br>
                    <strong>Músicas:</strong><br>
                    <ul>
                        ${disco.musicas.map(musica => `<li>${musica}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <button onclick="editarDisco(${indice})">Editar</button>
                    <button onclick="excluirDisco(${indice})">Excluir</button>
                </div>
            </div>
        `;

        itemDeLista.innerHTML = conteudo;
        return itemDeLista;
    }

    // Função para editar um disco existente
    function editarDisco(indice) {
        const novoTitulo = prompt("Novo Título:", discos[indice].titulo);
        const novoArtista = prompt("Novo Artista:", discos[indice].artista);
        const novoAno = prompt("Novo Ano:", discos[indice].ano);

        if (novoTitulo && novoArtista && novoAno) {
            discos[indice].titulo = novoTitulo;
            discos[indice].artista = novoArtista;
            discos[indice].ano = novoAno;
            atualizarListaDeDiscos();
        }
    }

    // Função para excluir um disco
    function excluirDisco(indice) {
        discos.splice(indice, 1);
        atualizarListaDeDiscos();
    }

    // Adiciona um listener de evento para o formulário de adicionar disco
    addRecordForm.addEventListener('submit', adicionarDisco);

    // Inicializa a lista de discos na página
    atualizarListaDeDiscos();
});


*/