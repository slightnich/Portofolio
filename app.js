const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
global.creator = "@nexon.js – Kens Ransyah"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pubilc/views', 'index.html'));
});

router.get('/version', async (req, res) => {
  try {
    var json = {
          status: true,
          data: {
            _id: "prime.5.2.73",
            version: "5.2.73", // update version
            commit: "feat: Button && List", // views
            url: "https://github.com/KensBot/nexon-bot/commit/287ff9037354fb25794308b70d57b862bf3e8719", //url link
            type: "prime", //types version
            at: 1714569754341,
          },
        }
    res.json(json)
  } catch (error) {
    console.error(error);
    res.json({creator: global.creator})
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app

