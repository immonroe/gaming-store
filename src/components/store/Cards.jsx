import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Database
import data from '../../db/data.json';

// Styling
import classes from '../store/Cards.module.css';

function Cards() {
  const maxCardHeight = '380px'; // Adjust this value to your desired fixed height

  return (
    <Container>
      <Row xs={1} md={2} lg={3} gap={1}> {/* Use xs, md, lg to control the number of columns */}
        {data.games.map((game) => (
          <Col key={game.id} className="mb-4"> {/* Add margin-bottom for spacing */}
            <Card
              sx={{
                maxWidth: 345,
                height: maxCardHeight, // Set a fixed height for the card
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia sx={{ height: 180 }} image={game.imageUrl} title={game.title} />
              <CardContent
                style={{
                  flex: '1',
                  overflow: 'hidden',
                  maxHeight: `calc(${maxCardHeight} - 180px)`, // Adjust for image height
                }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {game.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {game.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.cartContainer}>
                <Button size="small">Add to Cart</Button>
                <Typography variant="body2" color="text.primary">
                  Price: ${game.price.toFixed(2)}
                </Typography>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
