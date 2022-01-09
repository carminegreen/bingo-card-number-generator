const { range } =  require("./utils/range");

// Start
main();

function main() {

    // const columnsValueLength = [9,10,10,10,10,10,10,10,11]
    const numberFolder = 6;

    if (numberFolder % 6 !== 0) {
        return console.log("Inserire come numberFolder un multiplo di 6")
    }

    for (let i = 0; i < numberFolder/6; i++) {
        const folder = [];
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

        for (let f = 0; f < 6; f++) {

            for (let j = 0; j < 3; j++) {
                const result = [];
                columnsValue.forEach(row => addNumber(row, result) );
                // prendi 5 numeri per ogni riga
                const values = result.sort(() => .5 - Math.random()).sort(() => .5 - Math.random()).slice(0,5).sort((a, b) => a-b );
                folder.push({series: i+1, folder: f+1,  values});
                values.forEach(value => columnsValue.forEach(row => {
                    const v = row.findIndex(v => v === value);
                    if (v !== -1) {
                        columnsValue[columnsValue.indexOf(row)] = row.filter(r => r !== value)
                    }
                }));
            }

        }
        // console.log(columnsValue)
        console.log(folder)

    }
}


function addNumber(row, result) {
    if(row.length === 0) {
        return;
    }
    const casualNumber = Math.floor(Math.random()* row.length);

    result.push(row[casualNumber]);
}