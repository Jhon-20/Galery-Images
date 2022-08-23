let img = document.getElementsByClassName("image")
let idImage = document.querySelectorAll("#image")
let boxImagenes = document.querySelector(".box-imagenes");
let contentImagenes = document.querySelector(".content-imagenes")
let boxLargeImagen = document.querySelector(".box-large-imagen")
let boxImagen = document.getElementById("box-imagen")
let body = document.querySelector(".body")
let close = document.querySelector(".close")

for (const idimagen of idImage) {
  idimagen.addEventListener("click", (envet) => {
    boxImagenes.classList.add('resize-box-imagenes');
    contentImagenes.classList.add('content-image-resize');
    boxLargeImagen.classList.add('block-imagen')
    body.classList.add('resize-body')
  })
}
let n = 0;
function seleccionar(n) {
  let obj = img.item(n);
  boxImagen.src = obj.src
}
close.addEventListener("click", (envet) => {
  boxImagenes.classList.remove('resize-box-imagenes');
  contentImagenes.classList.remove('content-image-resize');
  boxLargeImagen.classList.remove('block-imagen')
  body.classList.remove('resize-body')

})