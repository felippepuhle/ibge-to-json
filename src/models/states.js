import { createObjectId } from '../utils';

const rows = [];

class States {
  static findAll () {
    return rows;
  }

  static insert (code, name, abbreviation) {
    const state = {
      _id: createObjectId(),
      code,
      name,
      abbreviation
    };

    rows.push(state);

    return state;
  }

  static load (code) {
    const filtered = rows.filter((state) => {
      return state.code === code;
    })

    if(filtered.length === 0) {
      return null;
    }

    return filtered[0];
  }
}

export default States
