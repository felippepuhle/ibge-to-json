import { createObjectId } from '../utils';

const rows = [];

class Cities {
  static findAll () {
    return rows;
  }

  static insert (state, code, name) {
    const city = {
      _id: createObjectId(),
      state: state._id,
      code,
      name
    };

    rows.push(city);

    return city;
  }

  static load (code) {
    const filtered = rows.filter((city) => {
      return city.code === code;
    })

    if(filtered.length === 0) {
      return null;
    }

    return filtered[0];
  }
}

export default Cities
