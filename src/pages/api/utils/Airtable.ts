const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID);

const table = base(`${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`);
const minifyRecords = (records: any[]) => {
  return records.map((record: any) => getMinifiedRecord(record));
};

const getMinifiedRecord = (record: { id: any; fields: any }) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, getMinifiedRecord, minifyRecords };
