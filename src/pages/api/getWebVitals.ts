import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

import { table, minifyRecords } from './utils/Airtable';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'OPTIONS'],
  })
);

const getWebVitals = async (req: any, res: any) => {
  // Run cors
  await cors(req, res);
  const {
    query: { url, name },
  } = req;

  try {
    const records: any = await new Promise((resolve, reject) => {
      let finalrecords: any[] = [];
      table
        .select({
          maxRecords: 1000,
          sort: [{ field: 'creationTime', direction: 'desc' }],
          filterByFormula: `IF(
            AND(
              ${url ? `{url} = ${url}` : 1},
              ${name ? `{name} = ${name}` : 1}
              ), "true"
              )`,
        })
        .eachPage(
          function page(records: any, fetchNextPage: () => void) {
            // This function (`page`) will get called for each page of records.
            finalrecords.push(minifyRecords(records));

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err: any) {
            if (err) {
              console.error(err);
              reject(err);
            }
            resolve(finalrecords);
          }
        );
    });
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(records[0]);
  } catch (err: any) {
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong', error: err.message });
  }
};

export default getWebVitals;
