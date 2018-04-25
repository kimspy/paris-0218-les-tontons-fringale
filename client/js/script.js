document.addEventListener("DOMContentLoaded", () => {
  /* ***** GESTION SEARCH RESPONSIVE **** */
  const btnSearchMobile = document.getElementById('btn-search-mobile')
  const searchInput = document.getElementById('search-wrapper')

  btnSearchMobile.addEventListener('click', () => {
    if (searchInput.classList.contains('visible')) {
      console.log('active')
      searchInput.classList.remove('visible')
    } else {
      searchInput.classList.add('visible')
    }
  })
})
