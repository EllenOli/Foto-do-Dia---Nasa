// Intro
function nasaRequest() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);

      // Data da NASA API json
      let copyright = data["copyright"];
      let date = data["date"];
      let explanation = data["explanation"];
      let hdurl = data["hdurl"];
      let media_type = data["media_type"];
      let titulo = data["title"];
      let url = data["url"];

      // HTML para imagens e vídeos
      let imageType = `
        <div
          class="bg-image hover-overlay ripple shadow-1-strong rounded"
          data-ripple-color="light"
        >
          <img id="wrapper-image" src="" class="w-100" />
          <a id="wrapper-hdurl" href="" target="_blank">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.2);"></div>
          </a>
        </div>
        `;
     
      // Elementos estáticos
      document.getElementById("titulo").innerHTML = titulo;
      document.getElementById("explicacao").innerHTML = explanation;
      document.getElementById("introData").innerHTML = date;

      // Se tiver imagens/videos
      if (media_type === "video") {
        document.getElementById("media").innerHTML = videoType;
        document.getElementById("wrapper-video").src = url;
      } else {
        document.getElementById("media").innerHTML = imageType;
        document.getElementById("wrapper-image").src = url;
        document.getElementById("wrapper-hdurl").href = hdurl;
      }
    }
  };
  // Acessando o valor da data escolhida
  let dataSelecionada_date = document.getElementById("data").value;
  // NASA API link
  let queryUrl = "https://api.nasa.gov/planetary/apod?";
  // API KEY
  let queryKey = "api_key=DaFi4M1aSffvFg0EGzfCxWruc6FyhR7wStWMPtxf&";
  // Selecionando
  let queryDate = "date=" + dataSelecionada_date + "&";
  // Full query
  let queryFull = queryUrl + queryKey + queryDate;

  xmlhttp.open("GET", queryFull, true);
  xmlhttp.send();
}

var campo = $(".form-label");
campo.on("click", function(){
  nasaRequest()
  
})


// iniciando a escolha da data
const dataSelecionada = document.getElementById("dataSelecionada");
// Mudar função da NASA
dataSelecionada.addEventListener("dateChange.mdb.dataSelecionada", (e) => {
  nasaRequest();
});


// Recarregando a página
nasaRequest().onload;


