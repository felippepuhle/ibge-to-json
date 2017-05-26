import xlsx from 'node-xlsx';

import { Cities, States } from '../models';
import { writeJSONFile } from '../utils';

const sheets = xlsx.parse(`${__dirname}/../../input/cidades.xlsx`);

class CitiesWorker {
  static run () {
    sheets.map((sheet) => {
      sheet.data.map((row) => {
        const stateCode = row[0].substring(0, 2);
        const state = States.load(stateCode);

        const cityCode = row[0];
        const cityName = row[1].substring(0, row[1].indexOf('(')).trim();

        Cities.insert(state, cityCode, cityName);
      })
    });

    writeJSONFile(Cities.findAll(), 'cities');
  }
}

export default CitiesWorker
