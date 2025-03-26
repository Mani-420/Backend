import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This is Home Page.');
});

app.get('/jokes', (req, res) => {
  const guyz = [
    {
      id: 1,
      title: 'Mani',
      content: 'Full Stack'
    },
    {
      id: 2,
      title: 'Hamza',
      content: 'Machine Learner'
    },
    {
      id: 3,
      title: 'Farhan',
      content: 'Backend'
    },
    {
      id: 4,
      title: 'Bhatti',
      content: 'Full Stack'
    },
    {
      id: 5,
      title: 'Faisal',
      content: 'Wordpress'
    }
  ];
  res.send(guyz);
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
