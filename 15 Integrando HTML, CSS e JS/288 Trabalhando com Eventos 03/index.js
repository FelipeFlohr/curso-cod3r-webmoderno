// Fazendo um Drag 'n' Drop
const items = document.querySelectorAll("[wm-dropzone] .item") // <- Irá pegar os itens que estão dentro de uma dropzone
items.forEach((item, index) => {
    item.draggable = true // <- Faz com que o item seja arrastável
    item.id = item.id || `draggable-item-${index}` // <- Se o item não possuir um ID, então passará a ter um
    item.ondragstart = e => { // Adiciona um evento "on drag start"
        e.dataTransfer.setData("item-id", e.target.id) // <- Guarda os dados do elemento que está selecionado
    }
})

const dropzones = document.querySelectorAll("[wm-dropzone]")
dropzones.forEach(dropzone => {
    dropzone.ondragover = e => e.preventDefault() // É necessário para evitar conflitos
    dropzone.ondrop = e => {
        const id = e.dataTransfer.getData("item-id")
        const item = document.getElementById(id)
        dropzone.appendChild(item) // Adicionará o item a dropzone
    }
})