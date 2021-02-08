const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((response) => response.json())
  .then((data) => {
    const meal = data.meals[0];
    const wrapper = document.getElementById('wrapper');

    const content = `<div class="container">
    <div class="row">
        
        </class>
         <div class="col-md-4">
         <div class="imgAbt">
            <img  width="300" height="320" src='${meal.strMealThumb}'>
            <h2 class="card-title">${meal.strCategory}</h2>
         </div>
         </div>
         
         <h4>ingredients</h4>
        <div class="col-md-8"><li>${meal.strIngredient}</li></div>
    </div>
    </div>`

    wrapper.innerHTML = content;
  });
  