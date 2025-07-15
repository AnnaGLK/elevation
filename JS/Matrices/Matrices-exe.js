let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matrix2 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9,]
]

console.log('/------- console.log(matrix[i][j])--------/');
for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}



const get = function (rowNum, colNum) {
    
    return matrix[rowNum][colNum]
    
}

console.log('/-------console.log(get(1, 1));--------/');
console.log(get(1, 1));


function print(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)
    }
}

console.log('/-------print(matrix);--------/');
print(matrix);
console.log('/------print(matrix2);---------/');
print(matrix2);


function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

console.log('/--------printColumn(matrix,1)-------/');
printColumn(matrix,1)
console.log('/-------printColumn(matrix2,0)--------/');
printColumn(matrix2,0)


function printRow(matrix, rowNum) {
    for (let i = 0; i < matrix[rowNum].length; i++) {
        
            console.log(matrix[rowNum][i])
        
    }
}

console.log('/-------printRow(matrix,1)--------/');
printRow(matrix,1)
console.log('/-------printRow(matrix2,0)--------/');
printRow(matrix2,0)


matrix[1][2] = 42
console.log('/-------print(matrix) with new item--------/');
print(matrix)


const alter = function (r, c, v) {
    this.matrix[r][c] = v
}
console.log('/-------alter(1, 1, 174)--------/');
// alter(1, 3, 174)
console.log(alter(1, 1, 174))
// print(matrix(alter(1, 1, 174)))