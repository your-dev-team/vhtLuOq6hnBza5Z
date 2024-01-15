const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
