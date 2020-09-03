export const alphabetCounter = (alphabetObject: AlphabetCounter, currentValue: string): AlphabetCounter => {

    if (alphabetObject[currentValue] === undefined) {
        alphabetObject[currentValue] = 1
    }
    else {
        alphabetObject[currentValue] += 1
    }

    return alphabetObject
}


interface AlphabetCounter {
    [key: string]: number
}
