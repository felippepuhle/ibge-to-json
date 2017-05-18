import fs from 'fs';

export function createObjectId () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

export function stateNameToAbbr (name) {
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

export function writeJSONFile(input, filename) {
  const dir = './output';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  const outputPath = `${dir}/${filename}.json`;
  const output = JSON.stringify(input);
  fs.writeFileSync(outputPath, output, 'utf-8');
}
