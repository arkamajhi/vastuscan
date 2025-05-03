const rooms = {
  entrance: { image: 'rooms/entrance.jpg', hotspots: [] },
  drawing: { image: 'rooms/drawing.jpg', hotspots: [] },
  dining: { image: 'rooms/dining.jpg', hotspots: [] },
  kitchen: { image: 'rooms/kitchen.jpg', hotspots: [] },
  bedroom: { image: 'rooms/bedroom.jpg', hotspots: [] },
  toilet: { image: 'rooms/toilet.jpg', hotspots: [] }
};

const sky = document.querySelector('#sky');
const hotspotContainer = document.querySelector('#hotspots');
const modal = document.querySelector('#infoModal');
const closeModal = document.querySelector('.close');
const infoTitle = document.querySelector('#infoTitle');
const infoText = document.querySelector('#infoText');

const roomSelect = document.querySelector('#roomSelect');
const addHotspotBtn = document.querySelector('#addHotspotBtn');
const hotspotTypeSelect = document.querySelector('#hotspotType');
const roomLinkSelect = document.querySelector('#roomLink');
const infoTextInput = document.querySelector('#infoText');
const saveHotspotBtn = document.querySelector('#saveHotspotBtn');
const hotspotTypeSection = document.querySelector('#hotspotTypeSection');

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

function addHotspot() {
  const selectedRoom = roomSelect.value;
  hotspotTypeSection.style.display = 'block';
  saveHotspotBtn.onclick = () => {
    const type = hotspotTypeSelect.value;
    const positionString = prompt('Enter hotspot position (e.g., "2 1 -3"): ');

    if (!positionString) {
      alert('Position cannot be empty!');
      return;
    }

    // Parse position into an array [x, y, z]
    const position = positionString.split(' ').map(val => parseFloat(val.trim()));

    if (position.length !== 3 || position.some(isNaN)) {
      alert('Invalid position format!');
      return;
    }

    const roomLink = roomLinkSelect.value;
    const infoTextValue = infoTextInput.value;

    if (type === 'info') {
      const info = {
        type: 'info',
        title: 'Information',  // Add your title here
        text: infoTextValue,
        position: position
      };
      rooms[selectedRoom].hotspots.push(info);
    } else {
      const link = {
        type: 'link',
        target: roomLink,
        position: position
      };
      rooms[selectedRoom].hotspots.push(link);
    }

    loadRoom(selectedRoom);
    hotspotTypeSection.style.display = 'none';
  };
}

addHotspotBtn.onclick = addHotspot;

closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

roomSelect.onchange = function () {
  loadRoom(roomSelect.value);
};

loadRoom(currentRoom);
