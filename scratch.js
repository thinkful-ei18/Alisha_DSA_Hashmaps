'use strict';
// the 'set' functions must be commented out in order for the console logs to run
// otherwise the code will error because of the curly braces after the params



const HashMap = require('./HashMap');
const sampleHash = new HashMap();

console.log(sampleHash.set('david', 'vocals'));

set(david, vocals) {
  const loadRatio = (this.length + this._deleted + 1) / this._capacity;
  // loadRatio = (0 + 0 + 1) / 8 => 0.125

  // skip this condition, 0.125 < 0.9
  if (loadRatio > HashMap.MAX_LOAD_RATIO) {
    this._resize(this._capacity * HashMap.SIZE_RATIO);
  }

  const index = this._findSlot(key);
  /* index = this._findSlot(David)
      findSlot(David) => 
        const hash = HashMap._hashString(David) => 256362285
        const start = 256362285 % 8 => 256362285 - (Math.floor(256362285 / 8) * 8) =>  (256362285 - 256362280) => 5
        for (let i=5; 5<13; i++) => 
          index = 5 % 8 => 5
          slot = _slots[5] => undefined
        
  const index = 5
  */

  this._slots[index] = {
    key,
    value,
    deleted: false
  };
  //  this._slots[5] = {key: david, value: vocals, deleted: false}

  this.length++;
  // this.length = 1
}


console.log(sampleHash.set('gregg', 'drums')); 

set(gregg, drums) {
  const loadRatio = (this.length + this._deleted + 1) / this._capacity;
  // loadRatio = (1 + 0 + 1) / 8 => 0.25

  // skip this condition, 0.25 < 0.9
  if (loadRatio > HashMap.MAX_LOAD_RATIO) {
    this._resize(this._capacity * HashMap.SIZE_RATIO);
  }

  const index = this._findSlot(key);
  /* index = this._findSlot(Gregg)
      findSlot(Gregg) => 
        const hash = HashMap._hashString(Gregg) => 260512401
        const start = 260512401 % 8 => 260512401 - (Math.floor(260512401 / 8) * 8) =>  (260512401 - 260512400) => 1
        for (let i=1; 1<13; i++) => 
          index = 1 % 8 => 1
          slot = _slots[1] => undefined
        
  const index = 1
  */

  this._slots[index] = {
    key,
    value,
    deleted: false
  };
  //  this._slots[1] = {key: gregg, value: drums, deleted: false}

  this.length++;
  // this.length = 2
}


console.log(sampleHash);

/*
sampleHash = {
  _slots: [ 
    '',
    { key: 'gregg', value: 'drums', deleted: false },
    '',
    '',
    '',
    { key: 'david', value: 'vocals', deleted: false } 
  ],
  length: 2,
  _capacity: 8,
  _deleted: 0 }
*/