var wms_layers = [];


        var lyr_argenmap_0 = new ol.layer.Tile({
            'title': 'argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_com_Ind_red_1 = new ol.format.GeoJSON();
var features_com_Ind_red_1 = format_com_Ind_red_1.readFeatures(json_com_Ind_red_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_com_Ind_red_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_com_Ind_red_1.addFeatures(features_com_Ind_red_1);
var lyr_com_Ind_red_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_com_Ind_red_1, 
                style: style_com_Ind_red_1,
                popuplayertitle: 'com_Ind_red',
                interactive: true,
    title: 'com_Ind_red<br />\
    <img src="styles/legend/com_Ind_red_1_0.png" /> Atacama<br />\
    <img src="styles/legend/com_Ind_red_1_1.png" /> Chané<br />\
    <img src="styles/legend/com_Ind_red_1_2.png" /> Charrúa<br />\
    <img src="styles/legend/com_Ind_red_1_3.png" /> Chicha<br />\
    <img src="styles/legend/com_Ind_red_1_4.png" /> Chorote<br />\
    <img src="styles/legend/com_Ind_red_1_5.png" /> Chulupí (Nivaclé)<br />\
    <img src="styles/legend/com_Ind_red_1_6.png" /> Comechingón<br />\
    <img src="styles/legend/com_Ind_red_1_7.png" /> Corundí<br />\
    <img src="styles/legend/com_Ind_red_1_8.png" /> Diaguita<br />\
    <img src="styles/legend/com_Ind_red_1_9.png" /> Fiscara<br />\
    <img src="styles/legend/com_Ind_red_1_10.png" /> Guaraní<br />\
    <img src="styles/legend/com_Ind_red_1_11.png" /> Guaycurú<br />\
    <img src="styles/legend/com_Ind_red_1_12.png" /> Huarpe<br />\
    <img src="styles/legend/com_Ind_red_1_13.png" /> Iogys<br />\
    <img src="styles/legend/com_Ind_red_1_14.png" /> Kolla<br />\
    <img src="styles/legend/com_Ind_red_1_15.png" /> Kolla Atacameño<br />\
    <img src="styles/legend/com_Ind_red_1_16.png" /> Lule<br />\
    <img src="styles/legend/com_Ind_red_1_17.png" /> Lule Vilela<br />\
    <img src="styles/legend/com_Ind_red_1_18.png" /> Mapuche<br />\
    <img src="styles/legend/com_Ind_red_1_19.png" /> Mapuche Tehuelche<br />\
    <img src="styles/legend/com_Ind_red_1_20.png" /> Mbya Guaraní<br />\
    <img src="styles/legend/com_Ind_red_1_21.png" /> Moqoit (Mocoví)<br />\
    <img src="styles/legend/com_Ind_red_1_22.png" /> Ocloya<br />\
    <img src="styles/legend/com_Ind_red_1_23.png" /> Omaguaca<br />\
    <img src="styles/legend/com_Ind_red_1_24.png" /> Pilagá<br />\
    <img src="styles/legend/com_Ind_red_1_25.png" /> Qom (Toba)<br />\
    <img src="styles/legend/com_Ind_red_1_26.png" /> Quechua<br />\
    <img src="styles/legend/com_Ind_red_1_27.png" /> Ranquel<br />\
    <img src="styles/legend/com_Ind_red_1_28.png" /> Sanavirón<br />\
    <img src="styles/legend/com_Ind_red_1_29.png" /> Selk´Nam (Onas)<br />\
    <img src="styles/legend/com_Ind_red_1_30.png" /> Tapiete<br />\
    <img src="styles/legend/com_Ind_red_1_31.png" /> Tastil<br />\
    <img src="styles/legend/com_Ind_red_1_32.png" /> Tehuelche<br />\
    <img src="styles/legend/com_Ind_red_1_33.png" /> Tilián<br />\
    <img src="styles/legend/com_Ind_red_1_34.png" /> Toara<br />\
    <img src="styles/legend/com_Ind_red_1_35.png" /> Tonokoté<br />\
    <img src="styles/legend/com_Ind_red_1_36.png" /> Vilela<br />\
    <img src="styles/legend/com_Ind_red_1_37.png" /> Wichí<br />\
    <img src="styles/legend/com_Ind_red_1_38.png" /> Yagán<br />\
    <img src="styles/legend/com_Ind_red_1_39.png" /> <br />' });

lyr_argenmap_0.setVisible(true);lyr_com_Ind_red_1.setVisible(true);
var layersList = [lyr_argenmap_0,lyr_com_Ind_red_1];
lyr_com_Ind_red_1.set('fieldAliases', {'Id': 'Id', 'Nombre_com': 'Nombre_com', 'Pueblo': 'Pueblo', 'Provincia': 'Provincia', 'Departamen': 'Departamen', 'Situación': 'Situación', 'Estado_Ins': 'Estado_Ins', 'Pueblo_ref': 'Pueblo_ref', });
lyr_com_Ind_red_1.set('fieldImages', {'Id': 'TextEdit', 'Nombre_com': 'TextEdit', 'Pueblo': 'TextEdit', 'Provincia': 'TextEdit', 'Departamen': 'TextEdit', 'Situación': 'TextEdit', 'Estado_Ins': 'TextEdit', 'Pueblo_ref': 'TextEdit', });
lyr_com_Ind_red_1.set('fieldLabels', {'Id': 'no label', 'Nombre_com': 'no label', 'Pueblo': 'no label', 'Provincia': 'no label', 'Departamen': 'no label', 'Situación': 'no label', 'Estado_Ins': 'no label', 'Pueblo_ref': 'no label', });
lyr_com_Ind_red_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});