/** ~ TRIES ~
 * 
 * Known as "radix trees"  or "prefix trees", it is 
 * used to store associative arrays where keys are usual strings.
 * 
 * Nodes of the tree do not store keys. Rather, they store parts of keys.
 * Traversing from 'root node' to 'leaf node'
 * allows for the the key to be built *during* traversal.
 * 
 * Not all nodes have values. Values are typically associted with 'leaf nodes'.
 * 
 * Built keys on-the-go are useful for specific apps, notably auto-complete
 * 
 * Trie Operations
 * 
 * insert(string)
 * remove(string)
 * contains(string)
 * find(prefix)
 * 
 */

// Build TrieNode object to insert new word into Trie
// Represents an entirely new Trie

const TrieNode = function(key) {
  // 'key' will be character in sequence
  this.key = key;
  // a reference to the parent
  this.parent = null;
  // has of children
  this.children = {};
  // checks ot see fi node is a 'leaf'
  this.end = false;

  this.getWord = function() {
    var output = [];
    var node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    };

    return output.join('');
  };
};

const Trie = function() {
  this.root = new TrieNode(null);

  /**
   * To insert a new word in Trie, check for 2 things
   * 
   * 1) Check that the word that needs to be added doesn't alread exist
   * 2) If the tree has been traversed down the branch
   *    where the word out to live and the word DOENST exist yet,
   *    insert value into node's reference where the word should go
   */
  
  this.insert = function(word) {
    // start at the root
    var node = this.root;
    // for every character in the string
    for (i=0;i<word.length;i++) {
      // chekc to see if character node exists in children
      if (!node.children[word[i]]) {
        // if it does not, then it is created
        node.children[word[i]] = new TrieNode(word[i]);
        // also assign the parent to the child node
        node.children[word[i]].parent = node;
      };
      // proceed to the next depth in the tree
      node = node.children[word[i]];
      // finally check if it's the last word
      if (i == word.length-1) {
        // if it is, set 'this.end' to true
        node.end = true;
      };
    };
  };

  /**
   * To check if the trie contains the word given or not,
   * check for every charact in the word
   * and see if the character node exists in children
   * 
   * if it exists, proceed to next depth of the trie, else return false
   * 
   * at end, return the word
   */

  //check if it contains a whole word
  this.contains = function(word) {
    var node = this.root;

    // for every character in the word
    for (i=0; i<word.length;i++) {
      //check to see if character node exists in children
      if (node.children[word[i]]) {
        //if it exists, proceed to next depth
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not valid
        return false;
      };
    };
    // we finish going through all the words, but is it a whole word?
    return node.end;
  };

  /**
   * To find all the wrods with griven prefix,
   * we need to perform two operations
   * 
   * 1) Make sure prefix actually has words
   * 2) Find all the words with given prefix
   */

  // return every word with given prefix
  this.find = function(prefix) {
    let node = this.root;
    let output = [];
    
    // recursive funciton to find all words in given node
    const findAllWords = (node, arr) => {
      // base case, if node is at a word, push to output
      if (node.end) {
        arr.unshift(node.getWord());
      }

      // iterate through each children, call recursive findAllWords
      for (let child in node.children) {
        findAllWords(node.children[child], arr);
      };
    };

    // for every character in prefix
    for (i=0;i<prefix.length;i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // if none, return it
        return output;
      };
      // recursively find all words in node
      findAllWords(node, output);
      return output;
    };
  };

  /**
   * To delete a key, do not delete the node corresponding to the key
   * as it might have childrend which still contain a key. 
   * 
   * Simply set it's value to 'NULL'
   * 
   * To improve efficiency, if the node corresponding to the key
   * has no children or all it's children have 'NULL',
   * maybe delete the entire node
   */

  // removes given word
  this.remove = function(word) {
    var root = this.root;
    if(!word) return;

    // recursively find and remove word
    const removeWord = (node, word) => {
      // check if current node contains the word
      if (node.end && node.getWord() === word) {

        // check and see if node has children
        var hasChildren = Object.keys(node.children).length > 0;

        // if has children, we only want to un-flag the end node
        // that marks the end of a word.
        // this we, we don't remove words
        // that contian/include supplied wird
        if (hasChildren) {
          node.end = false;
        } else {
          // remove word by getting aprent and setting chilren to empty dictionary
          node.parent.children = {};
        };
        return true;
      };
      //recursively remove word from all children
      for (let key in node.children) {
        removeWord(node.children[key], word);
      };
      return false;
    };
    // call remove word on root node
    removeWord(root, word);
  };
};

const trie = new Trie();

// insert few values
trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");

console.log(trie.find('pi'))