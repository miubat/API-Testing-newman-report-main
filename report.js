const newman = require("newman");
require("dotenv").config();
newman.run(
  {
    collection: `https://api.postman.com/collections/19337807-0d9cd405-e3d8-4176-bc64-ac4487d8a5ab?access_key=${process.env.ACCESS_KEY}`,
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete");
  }
);
