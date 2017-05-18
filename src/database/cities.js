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
}

export default Cities
