function toggleSearch(search, button) {
  const searchBar = document.getElementById(search);
  const searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("show_search");
  });
}

toggleSearch("search_bar", "search_button");
