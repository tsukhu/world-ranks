import { table, minifyRecords } from "./utils/Airtable";

export default async (req, res) => {
  const {
    query: { url, name },
  } = req;

  try {
    const records = await new Promise((resolve, reject) => {
      let finalrecords = [];
      table
        .select({
          filterByFormula: `IF(
            AND(
              ${url ? `{url} = ${url}` : 1},
              ${name ? `{name} = ${name}` : 1}
              ), "true"
              )`,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            finalrecords.push(minifyRecords(records));

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              reject(err);
            }
            resolve(finalrecords);
          }
        );
    });
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.json(records);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong", error: err.message });
  }
};
