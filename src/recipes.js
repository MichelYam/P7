export default function getAllRecipes(recipes) {
    function recipeIngredients(item) {
        let ingredientList = '';
        if (item.unit && item.quantity) {
            ingredientList = `<li>${item.ingredient} ${item.quantity}${item.unit}</li>`;
        } else if (item.quantity && !item.unit) {
            ingredientList = `<li>${item.ingredient} ${item.quantity}</li>`;
        } else {
            ingredientList = `<li>${item.ingredient}</li>`;
        }
        return ingredientList;
    }
    return recipes.map((recipe) => (
        ` <article class="recipe__card">
            <div class="img"></div>
            <div class="recipes__card-content">
                <div class="recipe__header">
                    <h2>${recipe.name}</h2>
                    <div>
                     <i class="far fa-clock"></i>
                     <span>${recipe.time} min</span>
                    </div>
                </div>
            <div class="recipe__container">
                <ul>
                    ${recipe.ingredients.map((item) => (
            recipeIngredients(item)
        )).join('')
        }
                </ul>
                <p>${recipe.description}</p>
             </div>
         </div>
        </article>`
    )).join('');
}