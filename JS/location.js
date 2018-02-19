
 function initMap() {
  // map options
  var options = {
   zoom:8,
   center:{lat:32.7765, lng:-79.9311}
  }

   // new map
   var map = new google.maps.Map(document.getElementById('map'),options);


   // add marker
   var marker = new google.maps.Marker({
    position:{lat:32.854622, lng:-79.974808},
    map:map,
    // icon:
    // src="../Images/logoSmall.png"
    // src='../Images/truck1.png'
   });

   // info widow
   var infoWindow = new google.maps.InfoWindow({
    content: "<img src='../Images/logoSmall.png'>"
   });

   marker.addListener('click',function() {
    infoWindow.open(map,marker);

   })

 }
