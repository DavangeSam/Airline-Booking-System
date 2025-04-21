const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/flights', (req, res) => {
  res.json([
    { id: 1, route: 'New York to London', time: '10:00 AM' },
    { id: 2, route: 'London to Switzerland', time: '11:00 AM' },
    { id: 3, route: 'France to UK', time: '12:00 PM' },
    { id: 4, route: 'Spain to Germany', time: '1:00 PM' },
    { id: 5, route: 'Ireland to Greenland', time: '2:00 PM' },
  ]);
});

app.post('/api/bookings', (req, res) => {
  console.log('Booking:', req.body);
  res.sendStatus(200);
});

app.listen(5000, () => console.log('Server running on port 5000'));
