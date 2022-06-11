/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/



const grid1 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ] // 1


const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  // 3

/* Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/


const getNeighbors  = (row, col, grid) => {
    const neighbors = [
        [row - 1, col],  // Up
        [row + 1, col], // Down
        [row, col - 1], // Left
        [row, col + 1], // Right
    ];

    const validNeighbors = neighbors.filter((neighbor) => {
        const [innerRow, innerColumn] = neighbor;

        return grid[innerRow] && grid[innerRow][innerColumn] && grid[innerRow][innerColumn] === "1";
    });
    
    return validNeighbors;
};


const numIslands = function(grid) {
    // Initialize a set to check values that we have already iterated through
    const visited = new Set();
    // Initialize a count
    let count = 0;
    // Iterate through all indices in matrix to build index values
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // If the node value meets criteria, pass that node forward
            if (grid[row][col] === "1" && !visited.has([row, col].toString())) {
                count++;

                visited.add([row, col].toString());

                const stack = [[row, col]];
                while (stack.length > 0) {
                    let currentNode = stack.pop();
                    let [currentRow, currentColumn] = currentNode;

                    const neighbors = getNeighbors(currentRow, currentColumn, grid);
                    neighbors.forEach((neighbor) => {
                        let neighborString = neighbor.toString();
                        if (!visited.has(neighborString)) {
                            visited.add(neighborString);
                            stack.push(neighbor);
                        };
                    });
                };
            };
        };
    };

    return count;
};

console.log(numIslands(grid1))
console.log(numIslands(grid2))