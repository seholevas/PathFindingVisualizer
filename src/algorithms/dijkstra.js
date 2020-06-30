// 1  function Dijkstra(Graph, source):
// 2
// 3      create vertex set Q
// 4
// 5      for each vertex v in Graph:             
// 6          dist[v] ← INFINITY                  
// 7          prev[v] ← UNDEFINED                 
// 8          add v to Q                      
// 10      dist[source] ← 0                        
// 11      
// 12      while Q is not empty:
// 13          u ← vertex in Q with min dist[u]    
// 14                                              
// 15          remove u from Q 
// 16          
// 17          for each neighbor v of u:           // only v that are still in Q
// 18              alt ← dist[u] + length(u, v)
// 19              if alt < dist[v]:               
// 20                  dist[v] ← alt 
// 21                  prev[v] ← u 
// 22
// 23      return dist[], prev[]

function Dijikstra(grid=[[]], source=graph[0][0])
{
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            grid[row][col]['type']
            // return <div className={"grid-row" + (row) + " "+ col} key={row+ " "+ col}></div>

        }
    }
}