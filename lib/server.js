import express from 'express';
import config from './config';

const app = express();

// Serving static files inside public directory
app.use(express.static('public'));

// Serving ejs file under views directory
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
