import os from 'os'

export default class generator {
    constructor() {
        console.log('generator started succesfully.')
    }

    getPassword() {
        let cpu = os.cpus()
        let rand = Math.floor(Math.random() * Math.max(cpu.length))
        let lomgboi = Math.abs(Math.floor(cpu[0].times.sys * Math.sqrt(cpu[2].times.idle * cpu[rand].times.irq)))
        let lomgboiArr = lomgboi = Math.abs(Math.floor(lomgboi * rand)).toString().split("")
        let asciiArray = []
        let passArray = []
        for (let i = 0; i < lomgboiArr.length; i++) {
            if (i != 0) {
                asciiArray.push(lomgboiArr[i] + lomgboiArr[i - 1])
            } else {
                asciiArray.push(lomgboiArr[i])
            }
        }
        for (let i = 0; i < asciiArray.length; i++) {
            if (asciiArray[i] > 32 && asciiArray[i] < 127) {
                passArray.push(String.fromCharCode(asciiArray[i]))
            } else {
                passArray.splice(i)
            }
        }
        // check if pass has reasonable length and if it isnt empty
        if (passArray.length > 8 && passArray.length < 20 && passArray != []) {
            return passArray.join("")
        } // if pass is empty, generate one from random characters
        else {
            let pass = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_-+=";
            for (let i = 0; i < 12; i++) {
                pass += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return pass;
        }
    }
}