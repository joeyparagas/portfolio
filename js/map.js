// Initialize and add the map
function initMap() {
  // Your location - https://www.latlong.net/
  const loc = { lat: 33.858349, lng: -118.064789 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
