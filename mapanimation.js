// This array contains the coordinates for all subway stops between WTC and Lincoln Center
const subwayStops = [
[-74.01206803212268, 40.71180227137148],
[-74.00917633376886, 40.71560668776563],
[-74.00666476244314, 40.71902329835399],
[-74.00602026251129, 40.7228102095396],
[-74.00513822099946, 40.728656808221146],
[-74.00238623975207, 40.733744100994244],
[-73.99993018387592, 40.73838539510895],
[-73.99642870739378, 40.741398152366884],
[-73.99252155785075, 40.74751582993132],
[-73.99003884744018, 40.75100254461322],
[-73.98704245339577, 40.75586283131034],
[-73.98364316223424, 40.761597402932125],
[-73.98172233630025, 40.76892839038522],
[-73.9822020518814, 40.773921152481705]
];


/*   [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
]; */


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hvd3doYSIsImEiOiJjbGozZHdpOHAxa3U3M2R1dTA5bmJrMDRlIn0.2TtHW3OuOZsleHF9ZkTIAQ';


let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.99993018387592, 40.73838539510895],
  zoom: 12.5,
});


var marker = new mapboxgl.Marker({
  color: 'red',
})
    .setLngLat([-74.01206803212268, 40.71180227137148])
    .addTo(map);



// counter here represents the index of the current subway stop
let counter = 0;
function move() {
  setTimeout(() =>{
    if(counter >= subwayStops.length) return;
    marker.setLngLat(subwayStops[counter]);
    counter++;
    move();
  }, 1000);
}

