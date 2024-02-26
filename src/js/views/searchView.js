class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear search input after submit
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Publisher:
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      // handler() is controlSearchResults function:
      handler();
    });
  }
}

export default new SearchView();
