import xlsx from 'node-xlsx';

import { Neighborhoods, Cities } from '../models';
import { writeJSONFile } from '../utils';

const sheets = xlsx.parse(`${__dirname}/../../input/bairros.xlsx`);

class NeighborhoodsWorker {
  static run () {
    sheets.map((sheet) => {
      sheet.data.map((row) => {
        const cityCode = row[0].substring(0, 7);
        const city = Cities.load(cityCode);

        const neighborhoodCode = row[0];
        const neighborhoodName = row[1].substring(0, row[1].indexOf('-')).trim();

        Neighborhoods.insert(city, neighborhoodCode, neighborhoodName);
      })
    });

    writeJSONFile(Neighborhoods.findAll(), 'neighborhoods');
  }
}

export default NeighborhoodsWorker
