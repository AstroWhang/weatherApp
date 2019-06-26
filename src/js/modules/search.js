let citySearched = 'Chicago, IL';

// cache dom
const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $spinnerWrapper = document.querySelector('.spinner-wrapper');

// create a geocode variable ex, const GEO = 'api key'

const initSearch = _ => {
  console.log('hello!!');
  bindSearchEvents();
}

const bindSearchEvents = () => {
  $searchForm.addEventListener('submit', e => {
    e.preventDefault();
    $searchInput.classList.toggle('search__input--open');
    $searchInput.focus();
    if ($searchInput.value === "") return;
    citySearched = $searchInput.value;
    $searchInput.value = '';
    // get lat and long, function goes here
    render();
  })
}

// create a function that gets the long and lat values
const getLatLng = (query) => {
  
}

const render = _ => {
  $searchCity.innerHTML = citySearched;
}

export {
  initSearch
}