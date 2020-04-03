require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const solver = require("./solveSudoku");

const PORT = process.env.PORT || 3001;
const app = express();

const jsonOutput = puzzle => ({
  data: puzzle
});

const errorOutput = message => ({
  error: message
});

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(helmet());
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan("combined"));

app.get("/solve", (req, res) => {
  try {
    const solution = solver(req.query.puzzle);
    res.send(jsonOutput(solution));
  } catch (error) {
    res.send(errorOutput(error.message));
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
