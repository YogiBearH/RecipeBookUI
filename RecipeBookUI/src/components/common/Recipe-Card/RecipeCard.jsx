import Card from 'react-bootstrap/Card';
import styles from './RecipeCard.module.css';
import { NavLink } from 'react-bootstrap';

const RecipeCard = ({ recipe }) => {

    return (
        <Card className={styles.card}>
          <Card.Title className={styles.title}>
            <NavLink href={`/recipes/${recipe.id}`}>
                {recipe.recipeName}
              </NavLink>
            </Card.Title>
          <h1>{recipe.id}</h1>
          <Card.Text>{recipe.description}</Card.Text>
        </Card>
    )
}

export default RecipeCard