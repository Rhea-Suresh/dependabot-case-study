const express = require("express");
const dayjs = require("dayjs");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Dependabot IA-2 demo application",
    date: dayjs().format("YYYY-MM-DD")
  });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
  });
}

module.exports = app;
