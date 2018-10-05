const express = require('express');

const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, () => { 
    console.log(`listening on ${PORT}`)
});