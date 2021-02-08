const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((response) => response.json())
  .then((data) => {
    const meal = data.meals[0];
    const wrapper = document.getElementById('wrapper');

    const content = `<img src='${meal.strMealThumb}' alt="">
    <h2 class="card-title">${meal.strCategory}</h2>
    <h4>ingredients</h4>`;

    wrapper.innerHTML = content;
  });
  