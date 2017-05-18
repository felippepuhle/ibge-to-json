import xlsx from 'node-xlsx';
import { stateNameToAbbr, writeJSONFile } from './utils';
import States from './database/states';
import Cities from './database/cities';

const sheets = xlsx.parse(`${__dirname}/../input/2016.xls`);

sheets.map((sheet) => {
  sheet.data.filter((row, index) => {
    return index > 0;
  }).map((row) => {
    const stateCode = row[0];
    const stateName = row[1];
    const stateAbbr = stateNameToAbbr(stateName);

    let state = States.load(stateCode);
    if (!state) {
      state = States.insert(stateCode, stateName, stateAbbr);
    }

    const cityCode = row[7];
    const cityName = row[8];

    Cities.insert(state, cityCode, cityName);
  })
});

writeJSONFile(States.findAll(), 'states');
writeJSONFile(Cities.findAll(), 'cities');

process.exit();
