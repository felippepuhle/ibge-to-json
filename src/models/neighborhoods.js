import { createObjectId } from '../utils';

const rows = [];

class Neighborhoods {
  static findAll () {
    return rows;
  }

  static insert (city, code, name) {
    const neighbordhood = {
      _id: createObjectId(),
      city: city._id,
      code,
      name
    };

    rows.push(neighbordhood);

    return neighbordhood;
  }

  static load (code) {
    const filtered = rows.filter((neighbordhood) => {
      return neighbordhood.code === code;
    })

    if(filtered.length === 0) {
      return null;
    }

    return filtered[0];
  }
}

export default Neighborhoods
