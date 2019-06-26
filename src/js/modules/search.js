let citySearched = 'Chicago, IL';

// cache dom
const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $spinnerWrapper = document.querySelector('.spinner-wrapper');

// create a geocode variable ex, const GEO = 'api key'
const GEOCODE_KEY = 'AIzaSyB2KoBdSIJUAT9zjjT5OOrRAIKodlyxLqk'


const initSearch = _ => {
  console.log('hello!!');
  bindSearchEvents();
};

const bindSearchEvents = () => {
  $searchForm.addEventListener('submit', e => {
    e.preventDefault();
    $searchInput.classList.toggle('search__input--open');
    $searchInput.focus();
    if ($searchInput.value === "") return;
    citySearched = $searchInput.value;
    $searchInput.value = '';
    // get lat and long, function goes here
    getLatLng(citySearched);
    render();
  });
}

// create a function that gets the long and lat values
// es6 put async before paramater
const getLatLng = async (query) => {
  const reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`;

  // put away before function name
  const fetchData = await fetch(reqLink);
  const parsed = await fetchData.json();
  const latLng = {
    lat: parsed.results[0].geometry.location.lat,
    lng: parsed.results[0].geometry.location.lng
  }
  
  return latLng;
}

const render = _ => {
  $searchCity.innerHTML = citySearched;
};

export {
  initSearch
}