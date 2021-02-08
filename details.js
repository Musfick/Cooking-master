const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((response) => response.json())
  .then((data) => {
    var meal = data.meals[0];
    var wrapper = document.getElementById('wrapper');

    var content = `<div class="col-3 py-3"> <div class="card"><img src='${meal.strMealThumb}' alt="">
    <h2 class="card-title">${meal.strCategory}</h2>
    <h4>Ingredients</h4>
    <ul><li>${meal.strIngredient2}</li></ul>
    <ul><li>${meal.strIngredient3}</li></ul>
    <ul><li>${meal.strIngredient4}</li></ul>
    <ul><li>${meal.strIngredient6}</li></ul>
    <ul><li>${meal.strIngredient5}</li></ul></div></div>`;})