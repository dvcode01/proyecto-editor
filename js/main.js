function update(){
    const editorElement = document.querySelector('.editor');
    const codigoElement = document.querySelector('.codigo');
    codigoElement.srcdoc = editorElement.value;
}