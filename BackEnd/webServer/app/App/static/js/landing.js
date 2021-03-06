function showCity(){
    var city = document.getElementById("city").value;
    var url = cityUrl + '?city_name=' + city;
    window.location.replace(url);
}

function validateCity(){
    // Validate city name
    var cityName = document.getElementById('city').value;
    if (!cityName) {
        alert('Please enter city name');
        return false;
    }
    cityfqcn = cityName;
    if (cityfqcn) {
        jQuery.getJSON(
                geobyteUrl + "GetCityDetails?callback=?&fqcn=" +cityfqcn + geobyteKey,
                function (data) {
                    if (data.geobytesfqcn) {
                        document.getElementById('city').value = data.geobytesfqcn;
                        showCity();
                    }
                    else alert('Please select city from drop down menu')
                }
            );
    }
}

function writeStory(){
    var city_name = document.getElementById('city').value;
    window.location.assign(writeUrl+'?city_name='+city_name);
}

