require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.listen(port, () => console.log(`Server started on port ${port}`));
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server API ready"
  });
});
