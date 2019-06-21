import uuid from 'uuid/v4';
import Chance from 'chance';

const c = new Chance();

const createDB = () => {
  console.log('creating db');
  const db = {};
  for (let i = 0; i < 10; i++) {
    const id = uuid();
    const name = c.first();
    const pictureName = `robo${i + 1}`
    db[id] = {
      id,
      name,
      img: pictureName,
      count: 0
    };
  }
  return db;
}


export default createDB;