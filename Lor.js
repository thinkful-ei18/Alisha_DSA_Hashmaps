'use strict';

const HashMap = require('./HashMap');


const Lor = () => {
  const lor = new HashMap();

  const CHARACTERS = [
    { Key: 'Hobbit', Value: 'Bilbo' }, 
    { Key: 'Hobbit', Value: 'Frodo' }, 
    { Key: 'Wizard', Value: 'Gandolf' }, 
    { Key: 'Human', Value: 'Aragon' }, 
    { Key: 'Elf', Value: 'Legolas' },
    { Key: 'Maiar', Value: 'The Necromancer' },
    { Key: 'Maiar', Value: 'Sauron' },
    { Key: 'RingBearer', Value: 'Gollum' },
    { Key: 'LadyOfLight', Value: 'Galadriel' },
    { Key: 'HalfElven', Value: 'Arwen' },
    { Key: 'Ent', Value: 'Treebeard' },
  ];

  // inserting 11 objects, with an initial capacity of 8 slots
  CHARACTERS.map(character => lor.set((character.Key), (character.Value)));

  console.log('lor', lor);

  /*
  - Each '' represents an empty index
  - the capacity has been tripled to 24 per HashMap.SIZE.RATIO
  - indexes are chosen based on the KEY, when you add a new value that has the same key, the initial value of that key is overridden

  lor = {
    _slots: [ 
      '',
      '',
      { key: 'HalfElven', value: 'Arwen', deleted: false },
      '',
      { key: 'LadyOfLight', value: 'Galadriel', deleted: false },
      '',
      { key: 'Wizard', value: 'Gandolf', deleted: false },
      { key: 'RingBearer', value: 'Gollum', deleted: false },
      '',
      '',
      '',
      '',
      { key: 'Elf', value: 'Legolas', deleted: false },
      { key: 'Hobbit', value: 'Frodo', deleted: false },
      '',
      '',
      '',
      '',
      '',
      '',
      { key: 'Ent', value: 'Treebeard', deleted: false },
      '',
      { key: 'Human', value: 'Aragon', deleted: false },
      { key: 'Maiar', value: 'Sauron', deleted: false } 
    ],
    length: 9,
    _capacity: 24
  }
  */

  return lor.get('Maiar');
  // this returns 'Sauron' because 'The Necromancer' (same key) was overwritten 
  
};

console.log(Lor());