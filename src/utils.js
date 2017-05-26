import fs from 'fs';

export function createObjectId () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};

export function writeJSONFile(input, filename) {
  const dir = './output';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }

  const outputPath = `${dir}/${filename}.json`;
  const output = JSON.stringify(input);
  fs.writeFileSync(outputPath, output, 'utf-8');
}
