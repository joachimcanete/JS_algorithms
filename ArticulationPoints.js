/** ARTICULATION POINTS - a vertext in an undirected connect graph that,
 *                        if removed, disconnects the graph and splits the
 *                        network into 2 or more components.
 * 
 *                        AP's represent vulnerabilities, and are useful for
 *                        designing reliable networks. 
 */

/** HOW TO FIND?
 * 
 *  - NAIVE APPROACH: The simple approach is to go through all vertices *1 by 1* and
 *                    see if removal of vertex causes disconnect.
 * 
 *       For every vertex `v`, perform the following
 *       i) Remove `v` from graph
 *       ii) See if graph remains connected (using BFS or DFS)
 *       iii) add `v` back to graph
 * 
 *       *NOTE* - Complexity for this method is `O(V*(V+E))`
 *                (Whatever the fuck that means...)
 * 
 *  - ALT METHOD: The idea is to use DFS. follow vertices in tree form
 *                called DFS tree.
 *                In DFS tree, a veterx `u` is parent of another vertex `v`
 *                if `v` is discovered by `u` (`v` is obviously adjacent to `u` in graph).
 * 
 *                In DFS tree, vertex `u` is an articulation point
 *                if one of the following conditions are ment
 *                 - `u` is root of DFS tree and has at least 2 children
 *                 - `u` is not root of DFS tree and has child `v` such that
 *                    no vertex in subtree rooted with `v` has edge
 *                    t one of the anscester (in DFS tree) of `u`
 */

/** DFS TRAVERSAL - Depth First Search on given graph to find Articulation Points (APs)
 * 
 *  - First Case
 * 1) Maintain `parent[]` array where `parent[u]` stores parent of vertex `u`
 *    Among the cases mentioned above, the first case is simple to detect.
 *     - For every `vertex`, count `children`
 *       if currently visisted vertex `u` is root (`parent[u]` is NIL)
 *       and has more than two children, print it.
 * 
 *  - Second Case
 * 2) Maintain an array `disc[]` to store discovery time of vertices.
 *    For every node `u`, find out the earliest visited vertex
 *    (vertex with minimum discovery time)
 *    that can be reached from subtree rooted with `u`.
 *    Maintain an additional array `low[]` which is defined below:
 * 
 *         low[u] = min(disc[u], disc[w])
 *         where `w` is ancestor of `u` and there is back edge
 *         from some descendents of `u` to `w`
 */

/** IMPLEMENTATION
 * 
 */

// class represents undirected graph using adjacency list representation

class Graph {
  constructor(v) {
    this.V = v;
    this.adj = new Array(v);
    this.NIL = - 1;
    this.time = 0;
    for (let i = 0; i < v; ++i) {
      this.adj[i] = []
    };
  };

  // adds edges into graph
  addEdge(v, w) {
    this.adj[v].push(w); // add `w` to `v`'s list
    this.adj[w].push(v); // add `v` to `w`'s list
  };

  // recursive funciton that finds APs using DFS
  /**
   * u = vertex to be visited next
   * visited[] = keeps track of visited vertices
   * disc[] = stores discovery times of visited vertices
   * parent[] = stores parent vertices in DFS tree
   * ap[] = store articulation points
   */
  APUtil(u, visited, disc, low, parent, ap) {
    // Count of children in DFS Tree
    let children = 0;
    // Mark the current node as visited
    visited[u] = true;
    // Initialize discovery time and low value
    disc[u] = low[u] = ++this.time;
    // Go through all vertices adjacent to this

    for (let i of this.adj[u]) {
      let v = i;  // v is current adjacent of u
      // If v is not visited yet, then make it a child of u
      // in DFS tree and recur for it
      if (!visited[v]) {
        children++;
        parent[v] = u;
        this.APUtil(v, visited, disc, low, parent, ap);

        // Check if the subtree rooted with v has a connection to
        // one of the ancestors of u
        low[u] = Math.min(low[u], low[v]);
        // u is an articulation point in following cases
        // (1) u is root of DFS tree and has two or more children.
        if (parent[u] == this.NIL && children > 1)
          ap[u] = true;
        // (2) If u is not root and low value of one of its child
        // is more than discovery value of u.
        if (parent[u] != this.NIL && low[v] >= disc[u])
          ap[u] = true;
      }

      // Update low value of u for parent function calls.
      else if (v != parent[u])
        low[u] = Math.min(low[u], disc[v]);
    }
  }

  AP() {
    // mark all vertices as `not visited`
    let visited = new Array(this.V);
    let disc = new Array(this.V);
    let low = new Array(this.V);
    let parent = new Array(this.V);
    let ap = new Array(this.V); // to store APs

    // initialize parent, visited, and ap arrays
    for (let i = 0; i < this.V; i++) {
      parent[i] = this.NIL;
      visited[i] = false;
      ap[i] = false;
    }

    // call the recursive helper funtion to find APs
    // in DFS tree rooted with vertex `i`
    for (let i = 0; i < this.V; i++) {
      if (visited[i] == false) {
        this.APUtil(i, visited, disc, low, parent, ap);
      };
    };
    for (let i = 0; i < this.V; i++) {
      if (ap[i] == true) {
        console.log(i + " ")
      };
    };
  };
};