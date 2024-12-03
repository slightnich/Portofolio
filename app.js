const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pubilc', 'index.html'));
});

app.get('/p', async (req, res) => {
  try {
    var json = {
          creator: "Kens Ransyah"
          status: true,
          msg: "Pemula om🙃"
        }
    res.json(json)
  } catch (error) {
    console.error(error);
    res.json({
      creator: "Kens Ransyah",
      status: false
    })
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app

