/** HASH TABLE (hash map)
 * - data structre that maps keys to values
 * 
 * HTs combine `lookup`, `insert`, and `delete` operations in an efficient way
 *  - a key is a sent to a hash function that performs arithmetic opertions on it.
 *  - The result (`hash value` / `hash`) is an index of the `key-value` pair
 * 
 *    "Think of this liek a signature on block of data that allows
 *    us to search in constant time. A `hash table` operates like
 *    a dictionary that we can *map* to get from the hash
 *    to the desired data"
 * 
 */

 /** HTs are made of 2 parts
 * 
 * 1) Object: An object with the table where the data is stored.
 * The array holds all the key-value entries
 * The size shouhld be set according to
 * the amount of data expected
 * 
 * 2) Hash Function: This function determines the index of our
 * key-value pair. it shouhld be a *one-way function*
 * and produce a different hash for each key.
 * 
 * (MORE)
 * A hash function is a method or function that takes
 * an item's key and returns the index whenver the key is looked up.
 * This operation usually returns the same has for a given key.
 * A good hash fucntion should be efficient to
 * compute and uniformly distribute keys.
 * 
 * Has fuctions help limit the range of keys to
 * the boundries of the array, so We need to convert
 * a large key into a smaller key
 */

/** ~~~NOTE~~~
 * 
 * In JavaScript, hash tables are generally implemented using ARRAYS
 * as they provide access to elenents in constant time
 * 
 * As a result, HTs are highly reccomended for algorithms that prioritize
 * SEARCH AND AND DATA RETRIVAL OPERATIONS. Hashing is ideal for large amounts of data,
 * as they take a constant amount of time to perform insertion, deletion, and search
 */

/** TYPES OF HASH FUNCTIONS
 * 
 * 1) Arithmetic Modular - Take the modular of the key with the list/array size
 *       `index = key MOD tableSize`
 *       The index will always stay betweeb `0` and `tableSize-1`
 * 2) Truncation - Select a part of the key as the index rather than the whole key.
 *      use a mod funciton for this operation,
 *      though it does not need to be based on array size
 * 3) Folding - Involves dividing the key into small chunks and
 *   applying a different arithmetic strategy at each chunk
 */

/** HASH COLLISIONS
 *  - A hash function will sometimes generate the same index
 *    for more than one key. This is known as a `hash collision`
 *    This is a problem because every slot in a has table
 *    is supposed to store a single element
 * 
 * Solutions to HCs:
 * 
 * 1) Linear Probing: Skip over an index that is already filled.
 *    Can be achieved by adding an offset value to
 *    an already computed index. If that index is also full,
 *    add it again and so on
 * 
 * 2) Chaining: Each slot of the hash table holds a pointer to another data structure
 *    such as a `linked-list` or `tree`. Every entry at the index will be
 *    inserted into the `linked-list` for that index
 * 
 *    Chaining allows us to hash multiple key-value pairs
 *    at the same index in constant time (insert at head for linked-list).
 *    This strategy greatly increase performance, but at the cost of SPACE
 * 
 * 3) Resizing Array: Set a threshold and, once it is crossed, create a new table
 *    double the size of the original. then, copy the elements over.
 * 
 *    Resizing the list or array siginificantly reduces collision,
 *    but the function is expensive. be careful about the threshold set.
 *    A typical convention is to set the threshold at `0.6`,
 *    which means when the table is 60% full, resize the table
 * 
 * 4) Double Hashing: There is a second has fucntion available. The second function
 *    is used to provide an offset value in case the first collides.
 *    Double hashing can find the next free slot faster than
 *    a linear probing approach. This is useful for smaller hash tables
 * 
 *  EX.
 *  `(firstHash(key) + i * secondHas(key) % tableSize)`
 */

/** BASIC HASH TABLE
 *  - need to do 4 things
 * 
 * 1) Create has table class
 * 2) add hash function
 * 3) implement method for add key-value pairs * 
 * 4) search method - searching through a hash table is very fast.
 *    Unlike an array where we must iterate all the way through,
 *    a hash table only needs to return the index
 */

// class HT {
//   constructor() {
//     //place to store valuesSSSSSS
//     this.vals = {};
//     //length of all values stored
//     this.length = 0;
//     // how many buckets in hash table (data go in bucket)
//     this.size = 0;
//   };

//   // takes the provided key and returns a hash
//   // that's calculated using an arithmetic modulus
//   calcHash(key) {
//     if (this.length == 0) {
//       return "Table Is Empty"
//     }
//     return key.toString().length % this.size;
//   };

//   // method at inserts key-value pairs
//   add(key,val) {
//     // calculate a `hash` for `key`
//     const hash = this.calcHash(key);
//     // FIRST CHECK: if it doesn't already exist, save it to object storage
//     if (!this.vals.hasOwnProperty(hash)) {
//       this.vals[hash] = {};
//     };
//     // SECOND CHECK: if doesn't have key saved, save key and value and increment table
//     if (!this.vals[hash].hasOwnProperty(key)) {
//       this.length++;
//     };
//     this.vals[hash][key] = val;
//   };

//   search(key) {
//     const hash = this.calcHash(key);
//       if (this.vals.hasOwnProperty(hash) && this.vals[hash].hasOwnProperty(key)) {
//         return this.vals[hash][key];
//     } else {
//       return null;
//     };
//   };
// };

// const hTable = new HT()
// hTable.length;
// hTable.size;

// hTable.add('Eulalia',1)
// hTable.add('Duchess',4)
// hTable.add('Lorreta',5)
// hTable.add('Lorain',6)
// hTable.add('Ms. Monday',3)
// hTable.add('Meridia',2)

/**BUCKET CHAINING
 *  - Chaining strategy along with resize operation avoid collisions
 *    All elements with same has key will be stored in
 *    array at that index (BUCKETS). Size of has table is set as
 *    `n * m` where `n` is numer of keys and
 *    `m` is number of slots each bucket has
 * 
 * 1) Build HashEntry class
 *    - A typical `hash entry` consists of 3 data members:
 *          i) the key
 *          ii) the value
 *          iii) the reference to a new entry
 * 2) Create HashTable
 *    - A collection of `HashEntry` objects
 *    - Will also track the number of slots in the table and
 *      the current size of the hash table. These variables
 *      will come in handy when the table eneds to be resized
 * 3) Implement Hash Function
 *    - Use the modular of the key with total size of hash table (slots)
 */

// class HashEntry {
//   constructor(key, data) {
//     this.key = key;
//     // data to be stored
//     this.value = data;
//     // reference to new entry
//     this.next = null;
//   };
// };

// class HashTable {
//   constructor() {
//     // size of hash table
//     this.slots = 10;
//     // current entires in table
//     // used for resizing when half of table fills
//     this.size = 0
//     // array of `HashEntry` objects (default all NONE)
//     this.bucket = [];
//     for (let i=0;i<this.slots;i++) {
//       this.bucket[i]=null;
//     };
//   };  
//   // The Helpers
//   get_size() {
//     return this.size;
//   };
//   isEmpty() {
//     return this.get_size()==0;
//   };  
//   // Hash Funciton
//   getIndex(key) {
//     let index = key % this.slots;
//     return index;
//   };

// };

/** ALT LECTURE
 * 
 */

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  };

  // hash function is used to determine placement of additions to Hash Table
  _hash(key) {
    let hash = 0;
    for (let i=0;i<key.length;i++) {
      hash += key.charCodeAt(i);
    };
    return hash % this.table.length;
  }

  // set() will call `_hash()` to  get index value
  // `key-value` pair will be assigned to the table at index
  // size will be incrememented by one

  // creation of secondary array to combat `hash collisions`
  // 1) look to `table[index]` and loop over array vals
  // 2) if `key` at one array === `key` pass to method,
  //    replace val at `index[1]` and stop execution with `return` statement
  // 3) if no matching `key` is found,
  //    push new array of `key` and `val` to second array
  // 4) else, initialize new array and push the `key-val` pairn to `index`
  // 5) when `push()` is called, increment `size` by one
  
  set(key, val) {
    const index =this._hash(key);
    if (this.table[index]) {
      for (let i=0;i<this.table[index].length;i++) {
        // find the `key-value` pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = val;
          return;
        };
      };
      // if not found, push a new `key-value` pair
      this.table[index].push([key,val]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, val]);
    };
    this.size++;
  };

  // accepts `key` as its param
  // will call _hash() to retrive table index
  // returns the value stored at table[index]

  // will also check second-level arrary with `for loop`
  // and return corrent `key-val` pair
  get(key) {
    const target = this._hash(key);
    if (this.table[target]) {
      for (let i=0;i<this.table.length;i++) {
        if (this.table[target][i][0] === key) {
          return this.table[target][i][1];
        };
      };
    };
    return undefined;
  };

  remove(key) {
    // retrieve `index` using `_hash()`
    const index = this._hash(key);
    
    if (this.table[index] && this.table[index].length) {
      for (let i=0;i<this.table.length;i++) {
        // when traversing table, if a match is found, execute and return true
        if (this.table[index][i][0] === key) {
          // .splice(i, n, X)
          // i = the index location,
          // n = number of elements to be affected
          // X = replacement (if provided)
          this.table[index].splice(i,1);
          this.size--;
          return true;
        };
      };
    } else {
      // if the index doesnt match up, it doesn't exist, thus fals
      return false;
    };
  };

  display() {
    this.table.forEach((val, index) => {
      const chainedVals = val.map(
        ([key,val]) => `[${key}: ${val}]`
      );
      console.log(`[${index}: ${chainedVals}]`)
    })
  }
};

const hTable = new HashTable();

hTable.set('Eulalia', 100)
hTable.set('Meridia', 200)
hTable.set('Ms. Monday', 300)
hTable.set('Duchess', 400)
hTable.set('Matilda', 500)
hTable.set('Loretta', 600)
hTable.set('Loraine', 700)

console.log(hTable);

hTable.display();