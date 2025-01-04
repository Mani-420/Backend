const express = require('express');
const app = express();
const PORT = 8080;





// --------------------------------------------------
// Listen port---
app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`)
});