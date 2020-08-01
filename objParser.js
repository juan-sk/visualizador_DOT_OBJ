class ObjParser {

    constructor() {

    }

    static parse(data) {
        let rows = data.split("\n")
        let allData = [];
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].includes("v  ")) {
                let prevData = [];
                let splitedData = rows[i].split(' ');

                prevData.push(Number(splitedData[2]));
                prevData.push(Number(splitedData[3]));
                prevData.push(Number(splitedData[4]));
                allData.push(prevData)
            }
            if (rows[i].includes("v ")) {
                let prevData = [];
                let splitedData = rows[i].split(' ');

                prevData.push(Number(splitedData[1]));
                prevData.push(Number(splitedData[2]));
                prevData.push(Number(splitedData[3]));
                allData.push(prevData)
            }
        }
        return allData;
    }
    getV(data) {
        let rows = data.split("\n")
        let allData = [];
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].includes("v  ")) {

                allData.push(rows[i])
            }
        }
        return allData;
    }
    removerV(data) {
        let newData = [];
        for (let i = 0; i < data.length; i++) {
            let prevData = [];
            let splitedData = data[i].split(' ');
            prevData.push([splitedData[2], splitedData[3], splitedData[4]])
            newData.push(prevData);

        }
    }
    convertirdata(data) {
        let newData = []
        for (let i = 0; i < data.length; i++) {
            newData.push()

        }
    }
}