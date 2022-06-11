/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

const grid1 = Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ] // 1


  const grid2 = grid = [
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


const getNeighbors  = (row, col, grid) {

    const neighbors =

}


const numIslands = function(grid) {
    const visited = new Set();
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[row].length; col++){
            let startingNode = grid[row][col];
        }
    }
};
