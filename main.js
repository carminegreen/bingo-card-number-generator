const { range, rand} =  require("./utils/range");

let columnsValue = [];
const columnsValueLength = [9,10,10,10,10,10,10,10,11]
const numberFolder = 6;

const totalNumber =  range(1,91)

if (numberFolder % 6 !== 0) {
    return console.log("Inserire come numberFolder un multiplo di 6")
}

const series = [];

for (let i = 0; i < numberFolder/6; i++) {
    let folder = [];
    columnsValue.push(
        range(1,10,1),
        range(10,20,1),
        range(20,30,1),
        range(30,40,1),
        range(40,50,1),
        range(50,60,1),
        range(60,70,1),
        range(70,80,1),
        range(80,91,1),
    );

    for (let j = 0; j < 3; j++) {
        const row = [];
        columnsValue.forEach(group => {
            const value = addNumber(group, row);
            columnsValue = columnsValue.map(r => r.filter(r => r !== value))
        });
        // prendi 5 numeri per ogni riga
        const values = row.sort(() => .5 - Math.random()).slice(0,5).sort((a, b) => a-b );
        folder.push({folder: i,  values})
    }

    console.log(columnsValue)
    console.log(folder)


}


function addNumber(row, array) {
    const casualNumber = Math.floor(Math.random()* row.length);
    // excluded.forEach(row => {
    //     if(row.includes(casualNumber)) {
    //         console.log("è successo con il numero", casualNumber)
    //         //addNumber(row, array, excluded);
    //     }
    // });
    array.push(row[casualNumber]);
    return casualNumber;
}