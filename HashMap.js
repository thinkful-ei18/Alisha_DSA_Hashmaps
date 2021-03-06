'use strict';

class HashMap {
  constructor(initialCapacity = 8) {
    this._slots = [];
    this.length = 0;
    this._capacity = initialCapacity;
    this._deleted = 0;
  }


  /* ============================ 
  GET - find which slot the key is being held at, then return that index's value
  ============================*/
  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error('Key error');
    }
    return this._slots[index].value;
  }


  /* ============================ 
  SET - add a key-value pair to the hashmap
  ============================*/
  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value,
      deleted: false
    };
    this.length++;
  }


  /* ============================ 
  REMOVE
  ============================*/
  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  /* ============================ 
  COLLISION HANDLING - open addressing
  ============================*/
  _findSlot(key) { 
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || (slot.key === key && !slot.deleted)) {
        return index;
      }
    }
  }


  /* ============================ 
  RESIZE THE ARRAY
  ============================*/
  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.deleted) {
        this.set(slot.key, slot.value);
      }
    }
  }


  /* ============================ 
  HASH - takes a string and returns a 32 bit number
  ============================*/
  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      // string.charCodeAt(i) is using ascii code
      hash = hash & hash;
    }
    return hash >>> 0;
  }


}

HashMap.MAX_LOAD_RATIO = 0.9; // when the 'slots' array is 90% full, a resize will happen
HashMap.SIZE_RATIO = 3; // the capacity will triple when the MAX_LOAD_RATIO is met


module.exports = HashMap;