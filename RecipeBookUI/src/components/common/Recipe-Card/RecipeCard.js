import Card from '@material-ui/core/Card';
import CardActions from '@mui/core/CardActions';
import CardContent from '@mui/core/CardContent';
import { Avatar, CardHeader, Typography } from '@mui/material';

/**
 * @name useStyles
 * @description Material-ui styling for ProductCard component
 * @return styling
 */
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    },
    default: {
      color: 'inherit'
    }
  }));
  

const RecipeCard = ({ recipe }) => {
    const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card>
            <CardHeader
                avatar={(
                    <Avatar aria-label="name" className={classes.avatar}>
                        {recipe.name.charAt(0)}
                    </Avatar>
                )}
                title={recipe.name}
                subheader={recipe.cookTime}
            />
            <CardActions disableSpace>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Description:</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {recipe.description}
                    </Typography>
                </CardContent> 
            </Collapse>
        </Card>
    )
}

export default RecipeCard