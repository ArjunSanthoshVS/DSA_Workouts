class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        // this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex, "-->", [...this.adjacencyList[vertex]]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacencntVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacencntVertex)
        }
        delete this.adjacencyList[vertex]
    }

    // bfs(startingVertex) {
    //     const visited = {};
    //     const queue = [startingVertex];
    //     const result = [];

    //     visited[startingVertex] = true;

    //     while (queue.length) {
    //         const currentVertex = queue.shift();
    //         result.push(currentVertex);
    //         console.log(this.adjacencyList[currentVertex]);
    //         this.adjacencyList[currentVertex].forEach((neighbor) => {
    //             if (!visited[neighbor]) {
    //                 visited[neighbor] = true;
    //                 queue.push(neighbor);
    //             }
    //         });
    //     }

    //     return result;
    // }

    // dfs(startingVertex) {
    //     const visited = {};
    //     const result = [];

    //     const dfsHelper = (vertex) => {
    //         visited[vertex] = true;
    //         result.push(vertex);

    //         this.adjacencyList[vertex].forEach((neighbor) => {
    //             if (!visited[neighbor]) {
    //                 dfsHelper(neighbor);
    //             }
    //         });
    //     };

    //     dfsHelper(startingVertex);

    //     return result;
    // }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")
graph.addEdge("C", "A")

graph.display()

console.log(graph.hasEdge("A", "C"));

graph.removeVertex("C")

graph.display()

// graph.bfs('A'); // BFS traversal starting from vertex A
// graph.dfs('A'); // DFS traversal starting from vertex A