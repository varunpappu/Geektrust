import { Airplane } from "./Airplane"

export class Main {

    static invoke(req: RequestState): Array<Array<string>> {

        const airplane = new Airplane()
        airplane.setSeatingArrangement(req.seatPattern)
        airplane.generateSeatPattern()
        airplane.setPassengerSeats(req.totalSeats, req.seatType)
        const seatingArrangement = airplane.getSeatPattern()
        console.log({ seatingArrangement })
        return seatingArrangement
    }
}


const reqState = {
    seatPattern: [[3, 2], [4, 3], [2, 3], [3, 4]],
    seatType: ["A", "W", "C"],
    totalSeats: 10
}
Main.invoke(reqState)


interface RequestState {
    seatPattern: Array<Array<number>>;
    seatType: Array<string>,
    totalSeats: number
}