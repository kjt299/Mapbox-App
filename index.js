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
        zoom: 12 // starting zoom
        }).addControl(new mapboxgl.AttributionControl({
            compact: true
        }));
        addMarkers(map);
}

//display map on load
window.onload = function() {
    setUpMap();
    populateSidebar(geojson);
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
        address:'sample'
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
        address:'sample'
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
          address:'sample'
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
          address:'sample'
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
          address:'sample'
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
          address:'sample'
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
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<p>' + marker.properties.title + '</p>'))
      .addTo(map);
  });
} 

//populate sidebar
function populateSidebar(data) {
  // Iterate through the list of landmarks
  for (i = 0; i < data.features.length; i++) {
    let currentFeature = data.features[i];
    // Select the listing container in the HTML and append a div with the class 'item' for each store
    let landmarks = document.getElementById('landmarks');
    let landmark = landmarks.appendChild(document.createElement('div'));
    landmark.className = 'item';
    landmark.id = 'landmark-' + i;

    const title = landmark.appendChild(document.createElement('div'));
    title.className = 'title';
    title.innerHTML = currentFeature.properties.title;

    // Create a new div with the class 'details' for each store and fill it with the title and description
    const address = landmark.appendChild(document.createElement('div'));
    address.className = 'address';
    address.innerHTML = currentFeature.properties.address;
  }
}