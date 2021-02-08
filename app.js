const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
  const inputFood = document.getElementById('foodName').value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFood}`)
    .then((response) => response.json())
    .then((data) => {
      var element = document.getElementById('alert');
      element.classList.add('d-none');
      var wrapper = document.getElementById('wrapper');
      var content = '';
      wrapper.innerHTML = content;
      var response = data.meals;

      if (response != null) {
        for (let i in response) {
          let meal = response[i];
          content += `
          <div class="col-3 py-3"> <div class="card">
          <a href="details.html?id=${meal.idMeal}">
            <img class="card-img-top clickable" src="${meal.strMealThumb}" alt="Card image cap">
          </a>
          
          <div class="card-body">
            <h5 class="card-title">${meal.strCategory}</h5>
          </div>
        </div></div>
          `;
        }

        wrapper.innerHTML = content;
      } else {
        const element = document.getElementById('alert');
        element.classList.remove('d-none');
        element.classList.add('d-block');
      }
    });
});