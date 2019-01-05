import React from 'react';

const Recipe = (props) => {

    const RRecipes = props.RRecipes;


    return (
        <div>

            <div className="recipe">
                Name: {RRecipes.name}
                Servings: {RRecipes.servings}
                Category: {RRecipes.category}


            </div>
        </div>
    )
}

export default Recipe;