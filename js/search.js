(function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");
  const heading = document.getElementById("search-heading");

  if (!heading) return;
  heading.textContent =
    query && query.trim()
      ? `Searched results for '${query.trim()}'`
      : "Searched results";
})();
