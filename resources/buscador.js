console.log("Visualizador INAI: buscador cargado");

// Caja de búsqueda
var buscador = document.createElement("input");

buscador.id = "buscadorComunidades";
buscador.type = "text";
buscador.placeholder = "Buscar comunidad...";

buscador.style.position = "absolute";
buscador.style.top = "10px";
buscador.style.left = "10px";
buscador.style.zIndex = "1000";
buscador.style.width = "280px";
buscador.style.padding = "8px";
buscador.style.border = "1px solid #999";
buscador.style.borderRadius = "5px";
buscador.style.fontSize = "14px";

document.body.appendChild(buscador);


// Lista de resultados
var resultados = document.createElement("div");

resultados.style.position = "absolute";
resultados.style.top = "45px";
resultados.style.left = "10px";
resultados.style.zIndex = "1000";
resultados.style.width = "280px";
resultados.style.background = "white";
resultados.style.border = "1px solid #ccc";
resultados.style.borderRadius = "5px";
resultados.style.fontSize = "14px";

document.body.appendChild(resultados);


// Buscar mientras escribe
buscador.addEventListener("input", function(){

    resultados.innerHTML = "";

    var texto = buscador.value.toLowerCase();

    if(texto.length < 3){
        return;
    }

	var encontrados = features_ComunidadesIndgenas_2.filter(function(feature){

    var nombre = feature.get("Nombre_com");
    var id = feature.get("Id");

    var coincideNombre = nombre &&
        nombre.toLowerCase().includes(texto);

    var coincideId = id &&
        id.toLowerCase().includes(texto);


    return coincideNombre || coincideId;

}).slice(0,10);


    encontrados.forEach(function(feature){

        var opcion = document.createElement("div");

        opcion.innerHTML =
	"<b>" + feature.get("Nombre_com") + "</b><br>" +
	"<small>" +
	(feature.get("Pueblo") || "") +
	" - " +
	(feature.get("Provincia") || "") +
	"<br>ID: " +
	(feature.get("Id") || "") +
	"</small>";

        opcion.style.padding = "8px";
        opcion.style.cursor = "pointer";
        opcion.style.borderBottom = "1px solid #ddd";


        opcion.onclick = function(){

            var coordenadas = feature.getGeometry().getCoordinates();


            map.getView().animate({
                center: coordenadas,
                zoom: 14,
                duration: 1000
            });


            var pixel = map.getPixelFromCoordinate(coordenadas);

            map.forEachFeatureAtPixel(pixel, function(f){

                popup.show(pixel,f);

            });


            resultados.innerHTML="";
            buscador.value=feature.get("Nombre_com");

        };


        resultados.appendChild(opcion);

    });

});