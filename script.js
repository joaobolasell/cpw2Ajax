// função para carregar mais imagens
function carregarImagens() {
  var ajax = new XMLHttpRequest();

  ajax.open("GET", "img.json", true);
  ajax.onreadystatechange = function() {
    if (ajax.readyState == 4 && ajax.status == 200) {
      let img = document.createElement("img");
      let data = JSON.parse(ajax.responseText);
      let i = Math.floor(Math.random() * 10);
      img.src = data.animals[i].imagemUrl;
      img.style.height = 100;
      img.style.width = 100;
      // img.style.border = "1px solid black";
      document.getElementById("images").appendChild(img);
    }
  };
  ajax.send();
}

carregarImagens();
// detecta quando o usuário chegou no final da página e carrega mais imagens
window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    carregarImagens();
  }
};
