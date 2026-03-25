// graph-utils.js

// Utility functions for graph data structures

// Function to add a vertex to a graph
function addVertex(graph, vertex) {
    if (!graph[vertex]) {
        graph[vertex] = {};
    }
}

// Function to add an edge to a graph
function addEdge(graph, vertex1, vertex2) {
    if (!graph[vertex1]) {
        addVertex(graph, vertex1);
    }
    if (!graph[vertex2]) {
        addVertex(graph, vertex2);
    }
    graph[vertex1][vertex2] = true;
    graph[vertex2][vertex1] = true; // For undirected graph
}

// Function to remove an edge from a graph
function removeEdge(graph, vertex1, vertex2) {
    if (graph[vertex1]) {
        delete graph[vertex1][vertex2];
    }
    if (graph[vertex2]) {
        delete graph[vertex2][vertex1];
    }
}

// Function to remove a vertex from a graph
function removeVertex(graph, vertex) {
    delete graph[vertex];
    for (let key in graph) {
        delete graph[key][vertex];
    }
}

// Example Usage:
// const graph = {};
// addVertex(graph, 'A');
// addVertex(graph, 'B');
// addEdge(graph, 'A', 'B');

export { addVertex, addEdge, removeEdge, removeVertex };