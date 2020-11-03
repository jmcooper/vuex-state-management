const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid').v4;

const app = express();
const users = {};

app.use(bodyParser.json());

app.get('/api/products', (req, res) => res.send(
  [{
    id: '7277956e-795f-4c0f-9861-cf03635df5ea',
    title: 'Mega Pokey Kit',
    price: 129.99,
    category: 'Climbing',
    description: 'Everything you need for traction on that thrilling ice climb.',
    image: 'mega-pokey-kit.jpg',
  }, {
    id: '7aac6aed-2859-41ee-bf94-8635ee7ad291',
    title: 'AireLite Explorer Kayak',
    price: 259.95,
    category: 'Kayaking',
    description: 'The ultimate in portability comfort. Our AireLite line of kayaks is unriviled in quality and portability.',
    image: 'airelite-kayak.jpg',
  }, {
    id: '24ab7b14-f935-44c1-b91b-8598123ea54a',
    title: 'Headlight Helmet',
    price: 59.95,
    category: 'Climbing',
    description: 'Protect your noggin and light your way. Get the best of both worlds with this 300 lumen lighted helmet.',
    image: 'headlight-helmet.jpg',
  }, {
    id: '1268b92c-af3f-4ea3-b8cf-0687f6611ecc',
    title: 'Trail Quest Waterproof Boots',
    price: 35.95,
    category: 'Hiking',
    description: 'Forge trail and stream in these durable, waterproof hiking boots.',
    image: 'hiking-boots.jpg',
  }, {
    id: '082ed283-eebd-487d-b04b-428762f922ad',
    title: 'LockTite Carabiner',
    price: 4.95,
    category: 'Climbing',
    description: 'LoktTite durable and secure carabiners create the ultimate in security without weighing you down.',
    image: 'carabiner.jpg',
  }, {
    id: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
    title: 'Ultimate Dreamline Kayak',
    price: 395.99,
    category: 'Kayaking',
    description: 'Bright, light and watertight. The perfect gift for the water enthusiast.',
    image: 'ultimate-dreamline-kayak.jpg',
  }, {
    id: '35a79026-210e-4e21-a0a5-b8565692a319',
    title: 'Beginner\'s Climbing Kit',
    price: 329.99,
    category: 'Climbing',
    description: 'Get started quick with this complete pack of climbing essentials.',
    image: 'beginners-kit.jpg',
  }, {
    id: '6130cdd4-071a-4559-8072-35f0fbec5516',
    title: 'Moccasins',
    price: 35.95,
    category: 'Hiking',
    description: 'Ditch the heavy boots for these lightweight hiking sandals. Perfect for both rugged terrain and hiking in streams.',
    image: 'moccasins.jpg',
  }, {
    id: 'dd0343e9-50b2-4f1d-8b87-93c0b34f3d35',
    title: 'Firebrand Kayak',
    price: 499.95,
    category: 'Kayaking',
    description: 'Why blend in when you can scream speed with this hot and sleek firebrand?',
    image: 'firebrand-kayak.jpg',
  }, {
    id: '7aac6aed-2859-41ee-bf94-8635ee7ad291',
    title: 'AireLite Explorer Kayak',
    price: 259.95,
    category: 'Kayaking',
    description: 'The ultimate in portability comfort. Our AireLite line of kayaks is unriviled in quality and portability.',
    image: 'airelite-kayak.jpg',
  }],
));

/* IMPORTANT: The code below is for demo purposes only and does not represent good security
             practices. In a production application user credentials would be stored on a
             server and the password should NEVER be stored as plain text. */
app.post('/api/register', (req, res) => setTimeout(() => {
  const user = req.body;
  if (user.firstName && user.lastName && user.email && user.password) {
    user.userId = uuid();
    users[user.email] = user;
    res.status(201).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(500).send('Invalid user info');
  }
}, 800));

/* IMPORTANT: The code below is for demo purposes only and does not represent good security
             practices. In a production application user credentials would be stored on a
             server and the password should NEVER be stored as plain text. */
app.post('/api/sign-in', (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else { res.status(401).send('Invalid user credentials.'); }
});

app.listen(8081, () => console.log('API Server listening on port 8081!'));
