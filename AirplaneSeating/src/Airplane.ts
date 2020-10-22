export class Airplane {

    private seatingArrangement: Array<SeatingArragangement> = []
    private seatPattern: Array<Array<string>> = []

    constructor() {
        this.seatingArrangement = []
        this.seatPattern = []
    }

    setSeatingArrangement(seatPattern: Array<Array<number>>): void {
        seatPattern.forEach((seat) => {
            this.seatingArrangement.push({
                row: seat[0],
                col: seat[1]
            })
        })

    }

    getSeatingArrangement(): SeatingArragangement[] {
        return this.seatingArrangement
    }

    setSeatPattern(seatPattern: Array<Array<string>>): void {
        this.seatPattern = seatPattern
    }

    getSeatPattern(): Array<Array<string>> {
        return this.seatPattern
    }

    getTotalRows(): number {
        return this.seatingArrangement.reduce((a, b) => (a + b.row), 0)
    }

    getTotalColumns(): number {
        return this.seatingArrangement.reduce((a, b) => (a + b.col), 0)
    }

    getMaxCol(): number {
        return Math.max(...this.seatingArrangement.map(o => o.col), 0);
    }

    generateSeatPattern(): void {
        const maxCol = this.getMaxCol()
        const seatingArrangement = this.getSeatingArrangement()
        const maxLength = seatingArrangement.length
        seatingArrangement.forEach((seat, index) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const seatPattern = (new Array(maxCol)).fill().map(function () { return new Array(seat.row).fill("X"); });
            for (let i = 0; i < seatPattern.length; i++) {
                if (i < seat.col) {
                    for (let j = 0; j < seat.row; j++) {
                        if ((index == 0 && j === 0) || (index == maxLength - 1 && j == seat.row - 1)) {
                            seatPattern[i][j] = "W"
                        }
                        else if (j > 0 && j < seat.row - 1) {
                            seatPattern[i][j] = "C"
                        } else {
                            seatPattern[i][j] = "A"
                        }
                    }

                }
            }
            if (this.seatPattern.length > 0) {
                const flattenedArray: Array<Array<string>> = this.seatPattern.map((item, i) => {
                    const updatedArray = [...item, ...seatPattern[i]]
                    return updatedArray
                });
                this.setSeatPattern(flattenedArray)
            } else {
                this.setSeatPattern(seatPattern)
            }
        })
    }

    setPassengerSeats(totalSeats: number, fillingPattern: string[]): void {

        const seatArrangenment = this.getSeatPattern();
        fillingPattern.forEach((seatType: string) => {
            const updatedSeatCount = this.fillPassengerSeats(seatArrangenment, seatType, totalSeats)
            totalSeats = totalSeats - updatedSeatCount
        })
    }

    fillPassengerSeats(seatArrangenment: Array<Array<string>>, seatType: string, totalSeats: number): number {
        let filledSeats = 0
        for (let i = 0; i < seatArrangenment.length; i++) {
            for (let j = 0; j < seatArrangenment[i].length; j++) {
                if (filledSeats < totalSeats && seatArrangenment[i][j] === seatType) {
                    seatArrangenment[i][j] = "F"
                    filledSeats++
                }
            }
        }
        return filledSeats
    }
}

interface SeatingArragangement {
    row: number,
    col: number
}

