let url = "http://api.open-notify.org/iss-now.json"
let longitude = document.getElementById("isslon");
let latitude = document.getElementById("isslat")
let date = document.getElementById("date");
let marker;
let map = L.map('mapper').setView([0,0], 2);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 10,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiaXNtYWVsMTAxIiwiYSI6ImNqczVhdWY0eDBkdGQ0M21qZ3Y3ejh5bWkifQ.ffs6c2Z4ixnQ5YIQUN2gKg'
}).addTo(map)
//i found this api online it should work the same
isslocation()
setInterval(isslocation,10000)

function isslocation(){
   fetch(url)
    .then(res => res.json())
    .then(issdata => {
        console.log(issdata)
        let lat = issdata.iss_position.latitude;
        let long = issdata.iss_position.longitude;
        latitude.innerHTML = lat
        longitude.innerHTML = long
        date.innerHTML = new Date();
        if(!marker){
            marker = L.marker([lat,long]).bindPopup(`latitude: ${lat}, longitutde: ${long}`).addTo(map)  
        }else{
            marker.setLatLng([lat,long])
            marker = L.marker([lat,long]).bindPopup(`latitude: ${lat}, longitutde: ${long}`).addTo(map)  

        }

    })
    .catch(err => {
        console.log(err)        

   })
}








