/** GRAPHS
 *  - non-linear data structure that containes a set of Vertices and Edges
 * 
 * Divided into 2 broad categories:
 * 1) Directed Graph (Di-Graph) - where Edges have direciton
 * 2) Undirected Graph - where Edges do *not* represent any direction
 * 
 *  - There are different ways to represent a Graph, but a couple are
 *    (MORE: https://www.geeksforgeeks.org/graph-and-its-representations/)
 *    * Adjacency Matrix (AM)
 *    * Adjacency List (AL)
 * 
 * This lecture will be focusing on `Adjacency List (AL)` because
 * in most cases, it has a certain advantage over other represenations
 */

//EX. class framework breakdown

// class constructor
class Graph {
  // define vertex array and adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AL = new Map();
  }
  
  /** functions include
   *  - addVertex(v)
   *  - addEdge(v,w)
   *  - printGraph()
   * 
   *  - bfs(v)
   *  - dfs(v)
   */
}

/** VARIABLES - private variables
 * 
 * 1) noOfVertices - used to store number of vertices in graph
 * 2) AL - use to store an Adjacency List of a particular vertex.
 *         A `Map()` object is used in order to implement `AL`
 */

/** ADD - adds the vertex `v` as key to `AL` and
 *        initilize its values with an array
 *      - adds `edge` between the `src` and the `dest`
 *        * source and destination *
 *        * in order to add edge, we get the `AL` of 
 *          the corresponding `src` vertex and add the `dest`
 *          to the AL
 */

// class Graph {
//   constructor(noOfVertices) {
//     this.noOfVertices = noOfVertices;
//     this.AL = new Map();
//   }
//   addVertex(v) {
//     // initialize the adjacent list with a null array
//     this.AL.set(v, []);
//   }
//   addEdge(v,w) {
//     this.AL.get(v).push(w);
//     this.AL.get(w).push(v);
//   };
  
//   // prints the vertex and the `AL`
//   print() {
//     let get_keys = this.AL.keys();
//     for (let i of get_keys) {
//       let get_vals = this.AL.get(i);
//       let conc = "";

//       for (let j of get_vals) {
//         conc += j + " ";
//       };
//       console.log(i + " -> " + conc)
//     };
//   };
// };

/** TRAVERSAL - going over some of the most common Graph Traversal Methods
 * 
 * 1) Breadth First Search - `bfs(startingNode)` performs breadth first traversal
 *                            from given `startingNode`
 * 
 * **NOTE** - In implementing the BFS algorith, `Queue` is used
 *            to keep the unvisited nodes
 */

// class Queue {
//   constructor() {
//     this.data = [];
//     this.rear = 0;
//     this.size = 10;
//   };
//   enqueue(ele) {
//     if(this.rear < this.size) {
//       this.data[this.rear] = ele;
//       this.rear = this.rear+1;
//     };
//   };
//   len() {
//     return this.rear;
//   };
//   isEmpty() {
//     return this.rear === 0;
//   };
//   getFront() {
//     if(this.isEmpty() === false) {
//       return this.data[0];
//     };
//   };
//   getRear() {
//     if(this.isEmpty() === false) {
//       return this.data[this.rear-1];
//     };
//   };
//   dequeue() {
//     if(this.isEmpty() === false) {
//       this.rear = this.rear-1;
//       return this.data.shift();
//     };
//   };
//   print() {
//     for(let i=0;i<this.rear;i++) {
//       console.log(this.data[i]);
//     };
//   };
//   clear() {
//     this.data.length = 0;
//     this.rear = 0;
//   };
// };

// class Graph {
//   constructor(noOfVertices) {
//     this.noOfVertices = noOfVertices;
//     this.AL = new Map();
//   }
//   // adds vertices to `Graph's` adjacency list
//   addVertex(v) {
//     // initialize the adjacent list with a null array
//     this.AL.set(v, []);
//   }
//   // adds `edge` to vertices
//   addEdge(v,w) {
//     this.AL.get(v).push(w);
//     this.AL.get(w).push(v);
//   };
//   // breadth first search
//   bfs(startingNode) {
//     // create a visited object
//     let visited = {};
//     // create an object for queue
//     let q = new Queue();

//     // add the starting node to the queue
//     visited[startingNode] = true;
//     q.enqueue(startingNode);

//     // loop unti queue is element
//     while (!q.isEmpty()) {
//       let getQueueElement = q.dequeue();
//       console.log(getQueueElement);

//       let get_List = this.AL.get(getQueueElement);
//       for (let i in get_List) {
//         let neighbors = get_List[i];
        
//         if (!visited[neighbors]) {
//           visited[neighbors] = true;
//           q.enqueue(neighbors);
//         };
//       };
//     };
//   };  
//   // prints the vertex and the `AL`
//   print() {
//     let get_keys = this.AL.keys();
//     for (let i of get_keys) {
//       let get_vals = this.AL.get(i);
//       let conc = "";

//       for (let j of get_vals) {
//         conc += j + " ";
//       };
//       console.log(i + " -> " + conc)
//     };
//   };
// };

// let g = new Graph(6);
// let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// for (var i = 0; i < vertices.length; i++) {
//   g.addVertex(vertices[i]);
// }

// g.addEdge('A', 'B');
// g.addEdge('A', 'D');
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');

// g.print();

/** TRAVERSAL (cont.) - going over some of the most common Graph Traversal Methods
 * 
 * 1) Depth First Search - `dfs(startingNode)` performs depth first traversal
 *                          from given `startingNode`
 * 
 * **NOTE** - In implementing the BFS algorith, `Queue` is used
 *            to keep the unvisited nodes
 *          - `dfs(startingNode)` is used to initialize a visited array
 *            and `DFSUtil(vertex, visited)` contains the implementation
 */

class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  };
  enqueue(ele) {
    if(this.rear < this.size) {
      this.data[this.rear] = ele;
      this.rear = this.rear+1;
    };
  };
  len() {
    return this.rear;
  };
  isEmpty() {
    return this.rear === 0;
  };
  getFront() {
    if(this.isEmpty() === false) {
      return this.data[0];
    };
  };
  getRear() {
    if(this.isEmpty() === false) {
      return this.data[this.rear-1];
    };
  };
  dequeue() {
    if(this.isEmpty() === false) {
      this.rear = this.rear-1;
      return this.data.shift();
    };
  };
  print() {
    for(let i=0;i<this.rear;i++) {
      console.log(this.data[i]);
    };
  };
  clear() {
    this.data.length = 0;
    this.rear = 0;
  };
};

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AL = new Map();
  }
  // adds vertices to `Graph's` adjacency list
  addVertex(v) {
    // initialize the adjacent list with a null array
    this.AL.set(v, []);
  }
  // adds `edge` to vertices
  addEdge(v,w) {
    this.AL.get(v).push(w);
    this.AL.get(w).push(v);
  };
  // breadth first search
  bfs(startingNode) {
    // create a visited object
    let visited = {};
    // create an object for queue
    let q = new Queue();

    // add the starting node to the queue
    visited[startingNode] = true;
    q.enqueue(startingNode);

    // loop unti queue is element
    while (!q.isEmpty()) {
      let getQueueElement = q.dequeue();
      console.log(getQueueElement);

      let get_List = this.AL.get(getQueueElement);
      for (let i in get_List) {
        let neighbors = get_List[i];
        
        if (!visited[neighbors]) {
          visited[neighbors] = true;
          q.enqueue(neighbors);
        };
      };
    };
  };
  // depth first search
  dfs(startingNode) {
    let visited = {};
    this.DFSUtil(startingNode, visited);
  };
  // recursive fucntion which process and
  // explores all acjacent vertices of the vertex
  // that is called
  DFSUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    let get_neighbors = this.AL.get(vertex);
    for(let i in get_neighbors) {
      let get_ele = get_neighbors[i];
      if (!visited[get_ele]) {
        this.DFSUtil(get_ele, visited);
      };
    };
  };
  // prints the vertex and the `AL`
  print() {
    let get_keys = this.AL.keys();
    for (let i of get_keys) {
      let get_vals = this.AL.get(i);
      let conc = "";

      for (let j of get_vals) {
        conc += j + " ";
      };
      console.log(i + " -> " + conc)
    };
  };
};

let g = new Graph(8);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'F');
g.addEdge('B', 'C');
g.addEdge('B', 'G');
g.addEdge('C', 'D');
g.addEdge('C', 'H');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'H');
g.addEdge('F', 'G');
g.addEdge('G', 'H');

g.print();

g.bfs('A');
g.dfs('A');