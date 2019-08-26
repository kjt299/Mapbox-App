//Store markers
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
      address:'Westminster, London SW1A 1AA',
      id:'1',
      markerId:'marker-1'
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
      address:'Lambeth, London SE1 7PB',
      id: '2',
      markerId:'marker-2'
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
        address:'Westminster, London SW1A 0AA',
        id:'3',
        markerId:'marker-3'
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
        address:'St Katharine\'s & Wapping, London EC3N 4AB',
        id:'4',
        markerId:'marker-4'
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
        address:'Great Russell St, Bloomsbury, London WC1B 3DG',
        id:'5',
        markerId:'marker-5'
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
        address:'St. Paul\'s Churchyard, London EC4M 8AD',
        id:'6',
        markerId:'marker-6'
      }
    }]
};

//Restricting map view to London only
const bounds = [[-0.8879165136707741, 51.19892541726361],
                //southwest coordinates];
                [0.6364365136759886,  51.81604491419381]];
                //northeast coordinates

//Map setup
function setUpMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2p0Mjk5IiwiYSI6ImNqemZpbWxjMjBjazczbnFrOG40dWlyaXgifQ.s9W5PFPvWY0cSmZsqioqdg';
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/kjt299/cjzrjjbkb4a8q1co3vp7ckf3b', // stylesheet location
        center: [-0.12574, 51.50853], // starting position [lng, lat]
        maxBounds:bounds,
        attributionControl: false,
        zoom: 12 // starting zoom
        }).addControl(new mapboxgl.AttributionControl({
            compact: true
        }));
        addMarkers(map);
}

//Display map on load
window.onload = function() {
    setUpMap();
    populateSidebar();
}

// Add markers to the map
function addMarkers(map) {
    geojson.features.forEach(function(marker) {
    // Create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';
    el.id = "marker-" + marker.properties.id;
    // Make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<p>' + marker.properties.title + '</p>'))
      .addTo(map);
  });
} 

//populate sidebar
function populateSidebar() {
  // Iterate through the list of landmarks
  for (i = 0; i < geojson.features.length; i++) {
    // Select the listing container in the HTML and append a div with the class 'item' for each landmark
    let landmarks = document.getElementById('landmarks');
    let landmark = landmarks.appendChild(document.createElement('div'));
    landmark.className = 'item';
    landmark.id = geojson.features[i].properties.id;

    // Create a new link with the class 'title' for each landmark
    let title = landmark.appendChild(document.createElement('p'));
    title.className = 'title';
    title.innerHTML = geojson.features[i].properties.title;

    // Create a new div with the class 'details' for each store and fill it with the title and description
    let address = landmark.appendChild(document.createElement('p'));
    address.className = 'address';
    address.innerHTML = geojson.features[i].properties.address;
  }
}

function filterResults() {
  let landmarks = [];
  for (let i = 0; i < geojson.features.length; i++){
    landmarks.push(geojson.features[i].properties.title); 
  }
  let input = document.getElementById('myInput').value;
  // Loop through all list items, and hide those who don't match the search query
  for (let i = 0; i < landmarks.length; i++) {
    if (!landmarks[i].toLowerCase().includes(input.toLowerCase())) {
      document.getElementById(geojson.features[i].properties.id).style.display = "none";
      document.getElementById(geojson.features[i].properties.markerId).style.backgroundImage = "none";
    }
    else{
      document.getElementById(geojson.features[i].properties.id).style.display = "";
      document.getElementById(geojson.features[i].properties.markerId).style.backgroundImage = "";
    }
  }
}

function toogleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.className === "sidebar") {
    sidebar.className = "hide-sidebar";
  } else {
    sidebar.className = "sidebar";
  }
}