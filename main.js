const { range, rand} =  require("./utils/range");

const columnsValueLength = [9,10,10,10,10,10,10,10,11]
const numberFolder = 6;

const totalNumber =  range(1,91,1)

if (numberFolder % 6 !== 0) {
    return console.log("Inserire come numberFolder un multiplo di 6")
}

const series = [];

for (let i = 0; i < numberFolder/6; i++) {
    let folder = [];
    let columnsValue = [
        range(1,10,1),
        range(10,20,1),
        range(20,30,1),
        range(30,40,1),
        range(40,50,1),
        range(50,60,1),
        range(60,70,1),
        range(70,80,1),
        range(80,91,1)
    ];

    // columnsValue.forEach((row,i)  => {
    //
    // })

    for (let f = 0; f < 6; f++) {

        for (let j = 0; j < 3; j++) {
            const row = [];
            columnsValue.forEach((group, i) => {
                addNumber(group, row)
            });
            // prendi 5 numeri per ogni riga
            const values = row.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()).slice(2,7).sort((a, b) => a-b );
            // console.log(values.map(value => columnsValue.find(row => row.find(v => v === value))))
            folder.push({series: i+1, folder: f+1,  values});
            //console.log(columnsValue)
        }

    }
    // console.log(columnsValue)
     console.log(folder)

}


function addNumber(row, array) {
    const casualNumber = Math.floor(Math.random()* row.length);
    array.push(row[casualNumber]);
}