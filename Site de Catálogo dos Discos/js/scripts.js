let openModalButton = document.querySelector("#open-modal");
let closeModalButton = document.querySelector("#close-modal");
let modal = document.querySelector("#modal");
let fade = document.querySelector("#fade");

let toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});






let listaDeDisco = [];
let indiceEdicao = -1;



function limpaCampos(){
    document.getElementById('title').value = '';
    document.getElementById('artist').value = '';
    document.getElementById('year').value = '';
    document.getElementById('image').value = '';
    document.getElementById('songs').value = '';
}

function adicionarDisco() {
    let titulo = document.getElementById('title').value;
    let artista = document.getElementById('artist').value;
    let ano = document.getElementById('year').value;
    let imagem = document.getElementById('image').files[0];
    let musicas = document.getElementById('songs').value.split('\n').map(musica => musica.trim());

    if(indiceEdicao >= 0){
        let disco = listaDeDisco[indiceEdicao];
        disco.titulo = titulo;
        disco.artista = artista;
        disco.ano = ano;

        if (imagem) {
            disco.imagem = imagem;
        }
        disco.musicas = musicas;
    }else{
        listaDeDisco.push(
            {'titulo': titulo, 'artista': artista, 'ano': ano, 'imagem': imagem, 'musicas': musicas}
        );
    }

    limpaCampos();
    atualizarListaDeDiscos();

    indiceEdicao = -1;
}

function editarDisco(indice){
    indiceEdicao = indice;
    let disco = listaDeDisco[indice];

    document.getElementById('title').value = disco.titulo;
    document.getElementById('artist').value = disco.artista;
    document.getElementById('year').value = disco.ano;
    document.getElementById('songs').value = disco.musicas.join('\n');

    toggleModal();

}

function excluirDisco(indice) {
    let disco = listaDeDisco[indice];

    if (confirm(`Tem certeza que deseja excluir o item ${disco.titulo}`)) {
        listaDeDisco.splice(indice, 1);
        atualizarListaDeDiscos();
    }
}

function atualizarListaDeDiscos() {
    recordList.innerHTML = '';

    listaDeDisco.forEach((disco, indice) => {
        let section = document.createElement('section');

        section.innerHTML = `
        <div class="recordItem vinilCaixa  text-color n-lista">
            <img src="${URL.createObjectURL(disco.imagem)}" alt="${disco.titulo}">
            <strong>Título: </strong>${disco.titulo} <br>
            <strong>Artista: </strong>${disco.artista} <br>
            <strong>Ano: </strong>${disco.ano} <br>
            <h4>
                ${disco.musicas.map(musica => `<li>${musica}</li>`).join('')}
            </h4>
            <td>
                <button class="editButton botao poppins-light"
                    type="button"
                    onclick="editarDisco(${indice})"
                    class="editButton">Editar
                </button>

                <button class="editButton botao poppins-light"
                    type="button"
                    onclick="excluirDisco(${indice})"
                    class="deletButton">Deletar
                </button>
            </td>
        </div>        
        `;

        recordList.appendChild(section);
    });

    





}