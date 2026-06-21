// --- Seed Data for Campus Water Purifiers ---
const SEED_DATA = [
  {
    id: "백주년기념삼성관",
    name: "백주년기념삼성관",
    campus: "humanities",
    lat: 37.5888,
    lng: 127.0323,
    purifiers: [
      { id: "삼성관-B1", floor: "B1층", location: "로비 엘리베이터 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "삼성관-1", floor: "1층", location: "대열람실 입구 화장실 옆", cupStatus: "unavailable", lastUpdated: new Date().toISOString() },
      { id: "삼성관-3", floor: "3층", location: "기획예산처 앞 복도", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "하나스퀘어",
    name: "하나스퀘어",
    campus: "science",
    lat: 37.5843,
    lng: 127.0270,
    purifiers: [
      { id: "하나스퀘어-B1-1", floor: "B1층", location: "선큰가든 입구 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "하나스퀘어-B1-2", floor: "B1층", location: "피트니스 센터 입구 앞", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "하나스퀘어-1", floor: "1층", location: "이마트24 편의점 옆 복도", cupStatus: "unavailable", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "서관",
    name: "서관 (인문대학)",
    campus: "humanities",
    lat: 37.5880,
    lng: 127.0326,
    purifiers: [
      { id: "서관-1", floor: "1층", location: "중앙계단 뒤편 화장실 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "서관-2", floor: "2층", location: "201호 대형강의실 옆", cupStatus: "unavailable", lastUpdated: new Date().toISOString() },
      { id: "서관-3", floor: "3층", location: "교수연구실 복도 끝", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "신공학관",
    name: "신공학관",
    campus: "science",
    lat: 37.5827,
    lng: 127.0253,
    purifiers: [
      { id: "신공학관-1", floor: "1층", location: "행정실 앞 엘리베이터 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "신공학관-3", floor: "3층", location: "312호 컴퓨터실습실 앞", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "신공학관-6", floor: "6층", location: "휴게실 음료자판기 옆", cupStatus: "unavailable", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "우정정보관",
    name: "우정정보관",
    campus: "science",
    lat: 37.5840,
    lng: 127.0248,
    purifiers: [
      { id: "우정정보관-1", floor: "1층", location: "로비 북카페 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "우정정보관-4", floor: "4층", location: "403호 옆 엘리베이터 앞", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "국제관",
    name: "국제관",
    campus: "humanities",
    lat: 37.5898,
    lng: 127.0315,
    purifiers: [
      { id: "국제관-2", floor: "2층", location: "국제대학원 행정실 옆", cupStatus: "unavailable", lastUpdated: new Date().toISOString() },
      { id: "국제관-4", floor: "4층", location: "로비 라운지 쉼터 안쪽", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "과학도서관",
    name: "과학도서관",
    campus: "science",
    lat: 37.5848,
    lng: 127.0267,
    purifiers: [
      { id: "과학도서관-1", floor: "1층", location: "로비 우측 엘리베이터 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "과학도서관-3", floor: "3층", location: "제1열람실 입구 복도", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "과학도서관-5", floor: "5층", location: "학생 휴게실 안쪽", cupStatus: "unavailable", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "경영본관",
    name: "경영본관",
    campus: "humanities",
    lat: 37.5878,
    lng: 127.0340,
    purifiers: [
      { id: "경영본관-1", floor: "1층", location: "행정팀 사무실 입구 맞은편", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "경영본관-3", floor: "3층", location: "302호 강의실 옆 화장실 앞", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  },
  {
    id: "미디어관",
    name: "미디어관",
    campus: "humanities",
    lat: 37.5866,
    lng: 127.0318,
    purifiers: [
      { id: "미디어관-1", floor: "1층", location: "SBS 스튜디오 입구 옆", cupStatus: "available", lastUpdated: new Date().toISOString() },
      { id: "미디어관-6", floor: "6층", location: "라운지 쉼터 엘리베이터 앞", cupStatus: "available", lastUpdated: new Date().toISOString() }
    ]
  }
];

// --- Global App State ---
let db = [];
let map = null;
let markers = {};
let userMarker = null;
let userLocation = { lat: null, lng: null };
let activeFilters = {
  search: "",
  campus: "all", // 'all', 'humanities', 'science', 'cups-only'
};
let expandedBuildingId = null;

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  initData();
  initMap();
  bindEvents();
  renderApp();
});

// Load data from localStorage or seed
function initData() {
  const cachedData = localStorage.getItem("godaesu_purifiers");
  if (cachedData) {
    try {
      db = JSON.parse(cachedData);
    } catch (e) {
      console.error("Failed to parse cached purifier data, falling back to seed.", e);
      db = [...SEED_DATA];
      saveData();
    }
  } else {
    db = [...SEED_DATA];
    saveData();
  }
}

function saveData() {
  localStorage.setItem("godaesu_purifiers", JSON.stringify(db));
}

// --- Map Integration ---
function initMap() {
  // Center map around KU main campus
  map = L.map('map', {
    center: [37.5878, 127.0298],
    zoom: 15,
    zoomControl: false // Move zoom controls to bottom-right or styled
  });

  // Add clean modern map tiles (CartoDB Positron for light theme look)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Add zoom control at bottom-right
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  updateMapMarkers();
}

function updateMapMarkers() {
  // Clear existing markers
  Object.keys(markers).forEach(key => {
    map.removeLayer(markers[key]);
  });
  markers = {};

  // Custom marker pin styled with CSS
  const crimsonMarkerIcon = L.divIcon({
    html: `
      <div class="marker-pin-wrapper">
        <div class="marker-pin"></div>
        <i class="fa-solid fa-droplet" style="position: absolute; top: 7px; left: 11px; font-size: 10px; color: #5dade2; z-index: 10;"></i>
      </div>
    `,
    className: 'custom-div-icon',
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -35]
  });

  // Create markers for active buildings
  const filteredBuildings = getFilteredBuildings();
  filteredBuildings.forEach(building => {
    const purifierCount = building.purifiers.length;
    const availableCount = building.purifiers.filter(p => p.cupStatus === 'available').length;
    
    const popupContent = `
      <div class="map-popup-card">
        <h3>${building.name}</h3>
        <p>${building.campus === 'humanities' ? '인문계 캠퍼스' : '자연계 캠퍼스'}</p>
        <p style="margin-top: 4px; font-weight: 700; color: var(--text-main);">
          정수기 ${purifierCount}개 중 ${availableCount}개 종이컵 있음
        </p>
      </div>
    `;

    const marker = L.marker([building.lat, building.lng], { icon: crimsonMarkerIcon })
      .bindPopup(popupContent)
      .addTo(map);

    marker.on('click', () => {
      focusBuildingInList(building.id);
    });

    markers[building.id] = marker;
  });
}

// --- App Render Logic ---
function renderApp() {
  renderBuildingsList();
  renderBuildingSelectOptions();
}

function getFilteredBuildings() {
  return db.filter(building => {
    // Search query filter
    const matchesSearch = building.name.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
      building.purifiers.some(p => p.floor.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                                   p.location.toLowerCase().includes(activeFilters.search.toLowerCase()));

    // Campus selection filter
    let matchesCampus = true;
    if (activeFilters.campus === 'humanities') {
      matchesCampus = building.campus === 'humanities';
    } else if (activeFilters.campus === 'science') {
      matchesCampus = building.campus === 'science';
    } else if (activeFilters.campus === 'cups-only') {
      matchesCampus = building.purifiers.some(p => p.cupStatus === 'available');
    }

    return matchesSearch && matchesCampus;
  });
}

function renderBuildingsList() {
  const buildingList = document.getElementById("building-list");
  const filtered = getFilteredBuildings();
  
  document.getElementById("building-count").textContent = filtered.length;

  if (filtered.length === 0) {
    buildingList.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass-minus"></i>
        <h3>검색 결과가 없습니다</h3>
        <p>검색어를 확인하거나 새로운 정수기 정보를 제보해 주세요.</p>
      </div>
    `;
    return;
  }

  // Calculate distance if GPS is available
  if (userLocation.lat && userLocation.lng) {
    filtered.forEach(building => {
      building.distance = haversineDistance(userLocation.lat, userLocation.lng, building.lat, building.lng);
    });
    // Sort by proximity
    filtered.sort((a, b) => a.distance - b.distance);
  } else {
    // Sort alphabetically by name
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  buildingList.innerHTML = "";
  
  filtered.forEach(building => {
    const totalPurifiers = building.purifiers.length;
    const availableCups = building.purifiers.filter(p => p.cupStatus === 'available').length;
    
    // Create card element
    const card = document.createElement("div");
    card.className = `building-card ${expandedBuildingId === building.id ? 'expanded' : ''}`;
    card.id = `card-${building.id}`;
    
    // Distance display html
    const distanceHtml = building.distance !== undefined 
      ? `<span class="building-distance"><i class="fa-solid fa-location-dot"></i> ${Math.round(building.distance)}m</span>`
      : "";

    card.innerHTML = `
      <div class="building-info" onclick="toggleBuildingCollapse('${building.id}')">
        <div class="building-main-details">
          <span class="building-tag ${building.campus === 'humanities' ? 'tag-humanities' : 'tag-science'}">
            ${building.campus === 'humanities' ? '인문계' : '자연계'} 캠퍼스
          </span>
          <span class="building-name">${building.name}</span>
          <div class="building-meta">
            <span>정수기 ${totalPurifiers}개 (컵 있음: ${availableCups}개)</span>
            ${distanceHtml}
          </div>
        </div>
        <i class="fa-solid fa-chevron-down card-expand-icon"></i>
      </div>
      <div class="purifiers-container">
        ${building.purifiers.map(p => `
          <div class="purifier-row">
            <div class="purifier-loc">
              <span class="purifier-floor">${p.floor}</span>
              <span class="purifier-desc">${p.location}</span>
            </div>
            <div class="purifier-actions">
              <span class="cup-badge ${p.cupStatus === 'available' ? 'cup-available' : 'cup-unavailable'}" 
                    onclick="handleCupStatusToggle('${building.id}', '${p.id}', event)">
                ${p.cupStatus === 'available' ? '🥤 컵 있음' : '❌ 컵 없음'}
              </span>
              <button class="toggle-cup-btn" onclick="handleCupStatusToggle('${building.id}', '${p.id}', event)" title="상태 제보/변경">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    buildingList.appendChild(card);
  });
}

// Populate building list in the report modal dropdown
function renderBuildingSelectOptions() {
  const buildingSelect = document.getElementById("building-select");
  
  // Keep the first disabled option and the custom option at the bottom
  buildingSelect.innerHTML = `
    <option value="" disabled selected>건물을 선택하세요</option>
  `;

  // Sort alphabetical list of buildings
  const sortedBuildings = [...db].sort((a, b) => a.name.localeCompare(b.name));
  
  sortedBuildings.forEach(building => {
    const opt = document.createElement("option");
    opt.value = building.id;
    opt.textContent = building.name;
    buildingSelect.appendChild(opt);
  });

  // Custom text registration option
  const customOpt = document.createElement("option");
  customOpt.value = "custom";
  customOpt.textContent = "➕ 기타 (직접 새 건물 추가)";
  buildingSelect.appendChild(customOpt);
}

// --- Event Handlers & Actions ---
function toggleBuildingCollapse(buildingId) {
  if (expandedBuildingId === buildingId) {
    expandedBuildingId = null;
  } else {
    expandedBuildingId = buildingId;
    
    // Pan map to building and open popup
    const building = db.find(b => b.id === buildingId);
    if (building && map) {
      map.setView([building.lat, building.lng], 16.5);
      if (markers[buildingId]) {
        markers[buildingId].openPopup();
      }
    }
  }
  renderBuildingsList();
}

function focusBuildingInList(buildingId) {
  expandedBuildingId = buildingId;
  renderBuildingsList();

  // Scroll to element smoothly
  const card = document.getElementById(`card-${buildingId}`);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('active-highlight');
    setTimeout(() => {
      card.classList.remove('active-highlight');
    }, 2000);
  }
}

function handleCupStatusToggle(buildingId, purifierId, event) {
  event.stopPropagation(); // Stop click from bubbling up to expand card
  
  const building = db.find(b => b.id === buildingId);
  if (!building) return;

  const purifier = building.purifiers.find(p => p.id === purifierId);
  if (!purifier) return;

  // Toggle status
  const originalStatus = purifier.cupStatus;
  purifier.cupStatus = originalStatus === 'available' ? 'unavailable' : 'available';
  purifier.lastUpdated = new Date().toISOString();
  
  saveData();
  showToast(`🥤 종이컵 상태가 '${purifier.cupStatus === 'available' ? '있음' : '없음'}'으로 업데이트되었습니다.`);
  
  // Re-render
  renderBuildingsList();
  updateMapMarkers();
  
  // Keep the current marker popup open and update its content
  if (markers[buildingId]) {
    const purifierCount = building.purifiers.length;
    const availableCount = building.purifiers.filter(p => p.cupStatus === 'available').length;
    
    const popupContent = `
      <div class="map-popup-card">
        <h3>${building.name}</h3>
        <p>${building.campus === 'humanities' ? '인문계 캠퍼스' : '자연계 캠퍼스'}</p>
        <p style="margin-top: 4px; font-weight: 700; color: var(--text-main);">
          정수기 ${purifierCount}개 중 ${availableCount}개 종이컵 있음
        </p>
      </div>
    `;
    markers[buildingId].setPopupContent(popupContent);
    markers[buildingId].openPopup();
  }
}

// --- Haversine Geolocation Utility ---
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// --- GPS Geolocation Trigger ---
function triggerGPS() {
  const gpsBtn = document.getElementById("gps-btn");
  const gpsStatus = document.getElementById("gps-status");
  
  gpsStatus.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> 위치 정보를 받는 중...`;
  gpsBtn.disabled = true;

  if (!navigator.geolocation) {
    showToast("⚠️ 이 브라우저는 GPS 위치 서비스를 지원하지 않습니다.", "error");
    gpsStatus.textContent = "GPS 지원 불가";
    gpsBtn.disabled = false;
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      userLocation.lat = position.coords.latitude;
      userLocation.lng = position.coords.longitude;

      gpsStatus.innerHTML = `<i class="fa-solid fa-circle-check"></i> GPS 연동 완료`;
      showToast("📍 내 GPS 위치 확인 완료! 가까운 거리 순으로 정렬되었습니다.");
      gpsBtn.disabled = false;

      // Add or update User location pulse marker on Map
      const userMarkerIcon = L.divIcon({
        html: `<div class="user-pulse-marker" title="내 위치"></div>`,
        className: 'custom-div-icon',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      if (userMarker) {
        userMarker.setLatLng([userLocation.lat, userLocation.lng]);
      } else {
        userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userMarkerIcon }).addTo(map);
      }

      // Re-center map to user
      map.setView([userLocation.lat, userLocation.lng], 16.5);
      
      // Update UI and list sorting
      renderBuildingsList();
    },
    (error) => {
      console.error(error);
      let errorMsg = "위치 정보를 가져오는데 실패했습니다.";
      if (error.code === error.PERMISSION_DENIED) {
        errorMsg = "위치 정보 활용 동의가 거부되었습니다.";
      }
      showToast(`⚠️ ${errorMsg}`, "error");
      gpsStatus.textContent = "GPS 연동 실패";
      gpsBtn.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
  );
}

// --- Toast Messages ---
function showToast(message, type = 'success') {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type === 'error' ? 'toast-error' : 'toast-success'}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') {
    icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 3s
  setTimeout(() => {
    toast.style.animation = "slideUpFade 0.3s reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// --- Event Bindings ---
function bindEvents() {
  // Search input events
  const searchInput = document.getElementById("search-input");
  const clearSearch = document.getElementById("clear-search");

  searchInput.addEventListener("input", (e) => {
    activeFilters.search = e.target.value;
    clearSearch.style.display = e.target.value.length > 0 ? "block" : "none";
    renderBuildingsList();
    updateMapMarkers();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    activeFilters.search = "";
    clearSearch.style.display = "none";
    renderBuildingsList();
    updateMapMarkers();
  });

  // Filter chips click events
  const chips = document.querySelectorAll(".filter-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilters.campus = chip.getAttribute("data-filter");
      renderBuildingsList();
      updateMapMarkers();
    });
  });

  // GPS Location Trigger button
  document.getElementById("gps-btn").addEventListener("click", triggerGPS);

  // Modals Open/Close triggers
  const infoModal = document.getElementById("info-modal");
  const reportModal = document.getElementById("report-modal");
  
  document.getElementById("info-btn").addEventListener("click", () => infoModal.style.display = "flex");
  document.getElementById("close-info-btn").addEventListener("click", () => infoModal.style.display = "none");
  
  document.getElementById("open-report-btn").addEventListener("click", () => {
    reportModal.style.display = "flex";
    document.getElementById("report-form").reset();
    document.getElementById("custom-building-group").style.display = "none";
  });
  
  document.getElementById("close-report-btn").addEventListener("click", () => reportModal.style.display = "none");

  // Close modals on clicking backdrop
  window.addEventListener("click", (e) => {
    if (e.target === infoModal) infoModal.style.display = "none";
    if (e.target === reportModal) reportModal.style.display = "none";
  });

  // Show/Hide custom building text input based on dropdown selection
  const buildingSelect = document.getElementById("building-select");
  const customBuildingGroup = document.getElementById("custom-building-group");
  const customBuildingInput = document.getElementById("custom-building-input");

  buildingSelect.addEventListener("change", (e) => {
    if (e.target.value === "custom") {
      customBuildingGroup.style.display = "block";
      customBuildingInput.required = true;
    } else {
      customBuildingGroup.style.display = "none";
      customBuildingInput.required = false;
    }
  });

  // Handle reporting form submission
  const reportForm = document.getElementById("report-form");
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const reportType = document.getElementById("report-type").value;
    const buildingValue = buildingSelect.value;
    const customBuildingName = customBuildingInput.value.trim();
    const floor = document.getElementById("floor-input").value.trim();
    const location = document.getElementById("location-detail").value.trim();
    const cupStatus = document.querySelector('input[name="cup-status"]:checked').value;

    let targetBuilding = null;

    if (buildingValue === "custom") {
      if (!customBuildingName) {
        showToast("⚠️ 건물명을 입력해주세요.", "error");
        return;
      }

      // Check if building name already exists
      const exists = db.find(b => b.name.toLowerCase() === customBuildingName.toLowerCase());
      if (exists) {
        targetBuilding = exists;
      } else {
        // Create new building object
        const buildingId = `custom-bldg-${Date.now()}`;
        
        // Pick campus category based on building name keywords
        let campus = "humanities";
        const scienceKeywords = ["공학", "이학", "과학", "창의", "하나", "생명", "애기능", "의과", "정보", "산학"];
        if (scienceKeywords.some(keyword => customBuildingName.includes(keyword))) {
          campus = "science";
        }

        // Set lat/lng coordinates (use userLocation if active, otherwise center with tiny random offset)
        const baseLat = userLocation.lat || 37.5878;
        const baseLng = userLocation.lng || 127.0298;
        const offsetLat = (Math.random() - 0.5) * 0.0015;
        const offsetLng = (Math.random() - 0.5) * 0.0015;

        targetBuilding = {
          id: buildingId,
          name: customBuildingName,
          campus: campus,
          lat: baseLat + offsetLat,
          lng: baseLng + offsetLng,
          purifiers: []
        };
        db.push(targetBuilding);
      }
    } else {
      targetBuilding = db.find(b => b.id === buildingValue);
    }

    if (!targetBuilding) {
      showToast("⚠️ 건물을 찾을 수 없습니다.", "error");
      return;
    }

    // Add or update the purifier floor
    const purifierId = `${targetBuilding.id}-${floor}-${Date.now()}`;
    const newPurifier = {
      id: purifierId,
      floor: floor,
      location: location,
      cupStatus: cupStatus,
      lastUpdated: new Date().toISOString()
    };

    // If a purifier with exactly same floor and similar details exists, update it, else append
    const existingP = targetBuilding.purifiers.find(p => p.floor.toLowerCase() === floor.toLowerCase());
    if (existingP && reportType !== 'new') {
      existingP.location = location;
      existingP.cupStatus = cupStatus;
      existingP.lastUpdated = new Date().toISOString();
      showToast(`📝 ${targetBuilding.name} ${floor} 정수기 정보가 수정되었습니다.`);
    } else {
      targetBuilding.purifiers.push(newPurifier);
      showToast(`✨ ${targetBuilding.name} ${floor} 정수기가 새롭게 등록되었습니다.`);
    }

    saveData();
    reportModal.style.display = "none";
    
    // Refresh app views
    renderApp();
    updateMapMarkers();
    
    // Pan map to the reported building marker and open it
    if (map && targetBuilding) {
      map.setView([targetBuilding.lat, targetBuilding.lng], 16.5);
      if (markers[targetBuilding.id]) {
        markers[targetBuilding.id].openPopup();
      }
    }
  });
}
