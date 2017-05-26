import xlsx from 'node-xlsx';

import { States } from '../models';
import { stateNameToAbbr, writeJSONFile } from '../utils';

const sheets = xlsx.parse(`${__dirname}/../../input/estados.xlsx`);

class StatesWorker {
  static abbr (name) {
    const rows = {
      'Acre': 'AC',
      'Alagoas': 'AL',
      'Amazonas': 'AM',
      'Amapá': 'AP',
      'Bahia': 'BA',
      'Ceará': 'CE',
      'Distrito Federal': 'DF',
      'Espírito Santo': 'ES',
      'Goiás': 'GO',
      'Maranhão': 'MA',
      'Minas Gerais': 'MG',
      'Mato Grosso do Sul': 'MS',
      'Mato Grosso': 'MT',
      'Pará': 'PA',
      'Paraíba': 'PB',
      'Pernambuco': 'PE',
      'Piauí': 'PI',
      'Paraná': 'PR',
      'Rio de Janeiro': 'RJ',
      'Rio Grande do Norte': 'RN',
      'Rondônia': 'RO',
      'Roraima': 'RR',
      'Rio Grande do Sul': 'RS',
      'Santa Catarina': 'SC',
      'Sergipe': 'SE',
      'São Paulo': 'SP',
      'Tocantins': 'TO'
    }

    return rows[name];
  }

  static run () {
    sheets.map((sheet) => {
      sheet.data.map((row) => {
        const stateCode = row[0];
        const stateName = row[1];
        const stateAbbr = StatesWorker.abbr(stateName);

        States.insert(stateCode, stateName, stateAbbr);
      })
    });

    writeJSONFile(States.findAll(), 'states');
  }
}

export default StatesWorker
