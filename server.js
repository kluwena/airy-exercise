const express = require('express');
const next = require('next');
const axios = require('axios');
const qs = require('query-string');

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const PORT = process.env.PORT || 4000;

nextApp
  .prepare()
  .then(() => {
    // express code
    const server = express()

    server.get('/tweets', (req, res) => {
      const q = req.query.q || 'news';
  
      const params = {
        q,
        count: 10,
      };
      console.log('express search triggered', qs.stringify(params))
  
      axios({
        url: `https://api.twitter.com/1.1/search/tweets.json?${qs.stringify(params)}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAANnA1AAAAAAATvVZf7mTCwC%2BOwgNdfaEoKhQwH0%3Dbtx150LrC2lUJ3cmoo4y8uFdMQPup4QDomjbyFavv2C8tjI9mJ',
          'Content-Type': 'application/json',
        },
      })
        .then(items => {
          console.log('axios getsuccess')
          res.json({  
            error: false,
            items: items.data.statuses,
          });
        })
        .catch(() => {
          console.log('error')
          res.json({
            error: true,
            message: 'Something went wrong',
          });
        });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })