import { table, minifyRecords } from './utils/Airtable';

const createWebVital = async (req: any, res: any) => {
  const { id, name, startTime, value, label, url } = req.body;
  try {
    const createdRecords = await table.create([
      {
        fields: {
          id,
          name,
          startTime,
          value,
          label,
          url,
        },
      },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (err: any) {
    res.statusCode = 500;
    res.json({ msg: err.message });
  }
};

export default createWebVital;
