'use strict';

const HashMap = require('./HashMap');


const Lor = () => {

  const lor = new HashMap();

  const CHARACTERS = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandolf' },
    { Human: 'Aragon' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' }
  ];

  // CHARACTERS.map(characterObj => lor.set(Object.keys(characterObj), Object.values(characterObj)));

  CHARACTERS.map(characterObj => console.log(Object.keys(characterObj), Object.values(characterObj)));



};

console.log(Lor());