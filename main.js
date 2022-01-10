const { range } =  require("./utils/range");
const fs = require("fs");

// Start
main();

function main() {

    // const columnsValueLength = [9,10,10,10,10,10,10,10,11]
    const numberFolder = 2004;

    if (numberFolder % 6 !== 0) {
        return console.log("Inserire come numberFolder un multiplo di 6")
    }

    const series = [];

    for (let i = 0; i < numberFolder/6; i++) {
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

        for (let f = 0; f < 6; f++) {
            const folder = [];

            for (let j = 0; j < 3; j++) {
                const result = [];

                columnsValue.map((r, i) => ({ len: r.length, index:i })).sort((a,b) => b.len-a.len)
                    .slice(0,5).sort(() => .5 - Math.random()).forEach(item => {
                    addNumber(columnsValue[item.index], result);
                });

                folder.push(result);
                result.forEach(value => columnsValue.forEach(row => {
                    const v = row.findIndex(v => v === value);
                    if (v !== -1) {
                        columnsValue[columnsValue.indexOf(row)] = row.filter(r => r !== value)
                    }
                }));
            }
            folders.push({folder: f+1,rows: folder});

        }
        series.push({series: i+1, folders});

    }
    fs.writeFile("./folders.json", JSON.stringify(series, null, 4), (err) => {
        if (err) {  console.error(err);  return; };
        console.log("Folder Saved!");
    });
}


function addNumber(row, result) {
    if(row.length === 0) {
        return;
    }
    const casualNumber = Math.floor(Math.random()* row.length);
    result.push(row[casualNumber]);
}