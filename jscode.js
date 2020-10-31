function ConvertToDeg(){
    var utmz = document.getElementById("input_utmz").value;
    var northing = document.getElementById("input_northing").value;
    var easting = document.getElementById("input_easting").value;
    try {
        var utm = new UTMConv.UTMCoords(utmz, easting, northing);
        var deg = utm.to_deg();
        document.getElementById("output_lat").innerHTML = deg.latd;
        document.getElementById("output_lon").innerHTML = deg.lngd;
        console.log(deg)
        GenerateOsmUrl(deg.latd, deg.lngd)
    } catch (error) {
        document.getElementById("deg2utm_logs").innerHTML = error.message;
    }

}


function ConvertToUtm(){
    var lat = document.getElementById("input_lat").value;
    var lng = document.getElementById("input_lng").value;
    try {
        var deg = new UTMConv.DegCoords(lat, lng);
        var utm = deg.to_utm(32)
        document.getElementById("output_utmz").innerHTML = utm.utmz
        document.getElementById("output_northing").innerHTML = utm.northing
        document.getElementById("output_easting").innerHTML = utm.easting
        console.log(utm)
        GenerateOsmUrl(lat, lng)
    } catch (error) {
        document.getElementById("utm2deg_logs").innerHTML = error.message;

    }
}


function GenerateOsmUrl(lat, lng){
    var url = "https://www.openstreetmap.org/search?whereami=1&query=" + lat + "%2C" + lng + "#map=17/" + lat + "/" + lng
    document.getElementById("osm_url").href = url
    document.getElementById("osm_url").innerHTML = url
}
