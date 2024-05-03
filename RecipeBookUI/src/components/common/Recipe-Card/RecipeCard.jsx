import Card from 'react-bootstrap/Card';

const RecipeCard = ({ recipe }) => {
    // const [expanded, setExpanded] = React.useState(false);
    
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // }
    const sortSteps = recipe.recipeSteps ? [...recipe.recipeSteps].sort((a, b) => a.stepNumber - b.stepNumber) : [];

    return (
        <Card>
          <Card.Title>{recipe.recipeName}</Card.Title>
          <h1>{recipe.id}</h1>
          <Card.Text>{recipe.description}</Card.Text>
          <Card.Text>{recipe.prepTime}</Card.Text>
          <Card.Text>{recipe.cookTime}</Card.Text>
          <Card.Text><u>Ingredients:</u></Card.Text>
          <p>
                {recipe.ingredients ? (
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.ingredientName} {ingredient.quantity} {ingredient.measurementName}</li>
                    ))
                ) : (
                    <li>No ingredients available</li>
                )}
          </p>
          <Card.Text><u>Recipe Steps:</u></Card.Text>
          <p>
            {sortSteps.map((step, index) => (
                <li key={index}>{step.stepNumber}. {step.stepDescription}</li>
            ))}
          </p>
        </Card>
    )
}

export default RecipeCard