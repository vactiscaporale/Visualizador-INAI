console.log("Buscador INAI cargado");

// Crear caja de búsqueda
var buscador = document.createElement("input");

buscador.id = "buscadorComunidades";
buscador.type = "text";
buscador.placeholder = "Buscar comunidad...";

buscador.style.position = "absolute";
buscador.style.top = "10px";
buscador.style.left = "10px";
buscador.style.zIndex = "1000";
buscador.style.width = "250px";
buscador.style.padding = "8px";
buscador.style.border = "1px solid #999";
buscador.style.borderRadius = "5px";
buscador.style.fontSize = "14px";

document.body.appendChild(buscador);


// Buscar comunidad
buscador.addEventListener("change", function() {

    var texto = buscador.value.toLowerCase();

    var encontrado = features_ComunidadesIndgenas_2.find(function(feature) {

        var nombre = feature.get("Nombre_com");

        return nombre && nombre.toLowerCase().includes(texto);

    });


    if (encontrado) {

        var geometria = encontrado.getGeometry();

        var coordenadas = geometria.getCoordinates();

        map.getView().animate({
            center: coordenadas,
            zoom: 14,
            duration: 1000
        });

        // abrir popup
        var pixel = map.getPixelFromCoordinate(coordenadas);
        map.forEachFeatureAtPixel(pixel, function(feature) {
            popup.show(pixel, feature);
        });

    } else {

        alert("No se encontró la comunidad");

    }

});