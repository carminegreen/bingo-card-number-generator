const { range } =  require("./utils/range");
const fs = require("fs");

// Start
main();

function main() {

    // const columnsValueLength = [9,10,10,10,10,10,10,10,11];
    const numberFolder = process.argv[2] || 6;
    const FOLDER_LENGTH = 6;
    const ROW_LENGTH = 3;
    const NUMBER_OF_ROW = 5;

    if (numberFolder % FOLDER_LENGTH !== 0) {
        return console.log("Inserire come numberFolder un multiplo di FOLDER_LENGTH");
    }

    const series = [];

    for (let i = 0; i < numberFolder/FOLDER_LENGTH; i++) {
        const folders = [];
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

        for (let f = 0; f < FOLDER_LENGTH; f++) {
            const folder = [];

            for (let j = 0; j < ROW_LENGTH; j++) {
                const result = [];

                columnsValue.map((r, i) => ({ len: r.length, index:i })).sort((a,b) => b.len-a.len)
                    .slice(0,NUMBER_OF_ROW).sort(() => .5 - Math.random()).forEach(item => {

                        // addNumber(columnsValue[item.index], result);
                        const random = Math.floor(Math.random()* columnsValue[item.index].length);
                        const value = columnsValue[item.index][random];
                        result.push(value);

                        columnsValue[item.index] = columnsValue[item.index].filter(r => r !== value);
                });

                const folderOrder = result.sort((a,b) => a - b);

                folder.push(folderOrder);

            }
            const number = i === 0 ? f+1 : ((FOLDER_LENGTH * i) + f + 1);
            folders.push({number, folder});

        }
        // console.log(columnsValue)
        console.log(`Generate ${i+1} series of ${numberFolder/FOLDER_LENGTH}`);


        if(series.map(arr => arr.folders.map(f => folders.find(folder => JSON.stringify(f) === JSON.stringify(folder)))).filter(v => !v).length !== 0) {
            writeJson(series, FOLDER_LENGTH);
            process.exit(1);
        }

        series.push({number: i+1, folders});

    }
    writeJson(series, FOLDER_LENGTH);
}

function writeJson(data, dividend) {
    fs.writeFile("./folders.json", JSON.stringify(data, null, 4), (err) => {
        if (err) {  console.error(err);  return; }
        console.log(`${data.length * dividend} folders were successfully generated!`);
    });
}