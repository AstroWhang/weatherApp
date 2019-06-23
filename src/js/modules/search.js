let citySearched = 'Chicago, IL';

// cache dom
const $searchForm = document.querySelector('.search__form');
const $searchInput = document.querySelector('.search__input');
const $searchCity = document.querySelector('.search__city');
const $spinnerWrapper = document.querySelector('.spinner-wrapper');



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
    render();
  })
}

const render = _ => {
  $searchCity.innerHTML = citySearched;
}



export {
  initSearch
}