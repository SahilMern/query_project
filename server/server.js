const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const Query = require("./models/QuerySchema");

app.use(cors());
app.use(express.json());
require("./Database/Connection");
// Submit a query
app.post("/api/query", async (req, res) => {
  try {
    console.log(req.body);

    const { name, query } = req.body;
    const newQuery = new Query({ name, query });
    await newQuery.save();
    return res.status(201).json({ message: "Query submitted successfully!" });
  } catch (error) {
    console.error("Error submitting query:", error);
    res.status(500).json({ message: "Failed to submit query." });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
