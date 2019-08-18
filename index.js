//restricting map view to London only
const bounds = [[-0.8879165136707741, 51.19892541726361],
                //southwest coordinates];
                [0.6364365136759886,  51.81604491419381]];
                //northeast coordinates

//map setup
function setUpMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2p0Mjk5IiwiYSI6ImNqemZpbWxjMjBjazczbnFrOG40dWlyaXgifQ.s9W5PFPvWY0cSmZsqioqdg';
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-0.12574, 51.50853], // starting position [lng, lat]
        maxBounds:bounds,
        attributionControl: false,
        zoom: 9 // starting zoom
        }).addControl(new mapboxgl.AttributionControl({
            compact: true
        }));
        addMarkers(map);
}

//display map on load
window.onload = function() {
    setUpMap();
}

//store markers
const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.140634, 51.501476]
      },
      properties: {
        title: 'Buckingham Palace',
        description: 'Washington, D.C.'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.119519, 51.503399]
      },
      properties: {
        title: 'London Eye',
        description: 'San Francisco, California'
      }
    },
    {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.116773, 51.510357]
        },
        properties: {
          title: 'Big Ben',
          description: 'San Francisco, California'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.076132, 51.508530]
        },
        properties: {
          title: 'The Tower of London',
          description: 'San Francisco, California'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.126168, 51.518757]
        },
        properties: {
          title: 'British Museum',
          description: 'San Francisco, California'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-0.098056, 51.513611]
        },
        properties: {
          title: 'St Paul\'s Cathedral',
          description: 'San Francisco, California'
        }
      }]
};

// add markers to map
function addMarkers(map) {
    geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });
} 