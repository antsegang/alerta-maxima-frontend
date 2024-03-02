function initMap() {
  var coord = { lat: 4.60971, lng: -74.08175 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: coord,
  });
}
