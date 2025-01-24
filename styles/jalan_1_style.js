var size = 0;
var placement = 'point';
function categories_jalan_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'jalan desa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,197,222,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'jalan desaLL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(196,87,204,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'jalan kampung':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(113,104,222,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'jalan komplek':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,58,90,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'jalan tanah':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(223,188,117,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Jalan utama':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(140,207,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,205,131,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_jalan_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("nama jalan");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("nama jalan") !== null) {
        labelText = String(feature.get("nama jalan"));
    }
    
var style = categories_jalan_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
