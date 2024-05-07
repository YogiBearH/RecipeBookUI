import Card from 'react-bootstrap/Card';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {

    return (
        <Card className={styles.card}>
          <Card.Title className={styles.title}>{recipe.recipeName}</Card.Title>
          <h1>{recipe.id}</h1>
          <Card.Text>{recipe.description}</Card.Text>
        </Card>
    )
}

export default RecipeCard