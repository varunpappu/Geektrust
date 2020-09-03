import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import { SecretMessages } from './typings';
const entryPaths = glob.sync(path.join(__dirname, '../assets/*'))
const filePath = process.argv[2];

export class FileReader {

    static invoke(): SecretMessages[] {

        const inputList: SecretMessages[] = []

        if (filePath) {
            const readSecretMessages = fs.readFileSync(filePath, 'utf8');

            const secretMessage = FileReader.readFromFile(readSecretMessages)
            inputList.push(secretMessage)
            return inputList
        }

        for (let i = 0; i < entryPaths.length; i++) {

            const parsedPath = path.parse(entryPaths[i])
            if (parsedPath.ext === '.txt') {
                const readSecretMessages = fs.readFileSync(path.join(__dirname, `../assets/${parsedPath.base}`), 'utf8');
                const secretMessage = FileReader.readFromFile(readSecretMessages)
                inputList.push(secretMessage)
            }
        }

        return inputList
    }

    static readFromFile(readSecretMessages: string): SecretMessages {

        const secretMessages: SecretMessages = {}
        try {

            readSecretMessages.split("\n").forEach((secretMessage: string) => {
                const messageList = secretMessage.split(" ")
                const kingdomName = messageList.shift()
                if (kingdomName) {
                    secretMessages[kingdomName] = messageList.join("")
                }
            })
        } catch (e) {
            console.log('Error:', e.stack);
        }
        return secretMessages
    }
}




