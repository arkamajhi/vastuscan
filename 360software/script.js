const rooms = {
  entrance: { image: 'rooms/entrance.jpg', hotspots: [
    { position: '2 1 -3', target: 'drawing' },
    { position: '-2 1 -3', type: 'info', title: 'Entrance', text: 'This is the main entrance.' }
  ]},
  drawing: { image: 'rooms/drawing.jpg', hotspots: [
    { position: '2 1 -3', target: 'dining' },
    { position: '0 2 -3', type: 'info', title: 'Drawing Room', text: 'A spacious drawing room.' }
  ]},
  dining: { image: 'rooms/dining.jpg', hotspots: [
    { position: '0 1 -3', target: 'kitchen' }
  ]},
  kitchen: { image: 'rooms/kitchen.jpg', hotspots: [
    { position: '0 1 -3', target: 'bedroom' }
  ]},
  bedroom: { image: 'rooms/bedroom.jpg', hotspots: [
    { position: '0 1 -3', target: 'toilet' }
  ]},
  toilet: { image: 'rooms/toilet.jpg', hotspots: [
    { position: '0 1 -3', target: 'entrance' }
  ]}
};

const sky = document.querySelector('#sky');
const hotspotContainer = document.querySelector('#hotspots');
const modal = document.querySelector('#infoModal');
const closeModal = document.querySelector('.close');
const infoTitle = document.querySelector('#infoTitle');
const infoText = document.querySelector('#infoText');

let currentRoom = 'entrance';

function loadRoom(roomName) {
  const room = rooms[roomName];
  sky.setAttribute('src', room.image);
  hotspotContainer.innerHTML = '';

  room.hotspots.forEach(h => {
    const hotspot = document.createElement('a-entity');
    hotspot.setAttribute('position', h.position);
    hotspot.setAttribute('geometry', 'primitive: circle; radius: 0.3');
    hotspot.setAttribute('material', 'color: #FFC107; shader: flat');
    hotspot.setAttribute('look-at', '[camera]');

    if (h.type === 'info') {
      hotspot.addEventListener('click', () => {
        infoTitle.innerText = h.title;
        infoText.innerText = h.text;
        modal.style.display = 'block';
      });
    } else {
      hotspot.addEventListener('click', () => {
        loadRoom(h.target);
      });
    }

    hotspotContainer.appendChild(hotspot);
  });

  currentRoom = roomName;
}

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

loadRoom(currentRoom);
