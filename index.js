//restricting map view to London only
const bounds = [[-0.8879165136707741, 51.19892541726361],
                //southwest coordinates];
                [0.6364365136759886,  51.81604491419381]];
                //northeast coordinates

//displaying map
mapboxgl.accessToken = 'pk.eyJ1Ijoia2p0Mjk5IiwiYSI6ImNqemZpbWxjMjBjazczbnFrOG40dWlyaXgifQ.s9W5PFPvWY0cSmZsqioqdg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-0.12574, 51.50853], // starting position [lng, lat]
maxBounds:bounds,
zoom: 9 // starting zoom
});
