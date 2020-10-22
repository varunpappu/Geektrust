import { expect } from 'chai';
import { Main } from "../index"

describe('#seatingPattern()', () => {

    context('with arguments', () => {
        it('should return result when passenger seats are passed', () => {
            const result = [
                [
                    'W', 'C', 'F', 'F',
                    'C', 'C', 'F', 'F',
                    'F', 'F', 'C', 'W'
                ],
                [
                    'W', 'C', 'F', 'F',
                    'C', 'C', 'F', 'F',
                    'A', 'A', 'C', 'W'
                ],
                [
                    'X', 'X', 'X', 'A',
                    'C', 'C', 'A', 'A',
                    'A', 'A', 'C', 'W'
                ],
                [
                    'X', 'X', 'X', 'X',
                    'X', 'X', 'X', 'X',
                    'X', 'A', 'C', 'W'
                ]
            ]
            expect(Main.invoke({
                seatPattern: [[3, 2], [4, 3], [2, 3], [3, 4]],
                seatType: ["A", "W", "C"],
                totalSeats: 10
            })).eql(result)
        }),
            it('should create two window seats when pattern is of index 1', () => {

                const result = [['W', 'C', 'W'], ['W', 'C', 'W']]
                expect(Main.invoke({
                    seatPattern: [[3, 2]],
                    seatType: ["A", "W", "C"],
                    totalSeats: 0
                })).eql(result)
            }),

            it('should fill only required seats provided as input', () => {

                const result = [
                    [
                        'F', 'F', 'F', 'F',
                        'F', 'F', 'F', 'F',
                        'F', 'F', 'F', 'F'
                    ],
                    [
                        'F', 'F', 'F', 'F',
                        'F', 'C', 'F', 'F',
                        'F', 'F', 'C', 'F'
                    ],
                    [
                        'X', 'X', 'X', 'F',
                        'C', 'C', 'F', 'F',
                        'F', 'F', 'C', 'F'
                    ],
                    [
                        'X', 'X', 'X', 'X',
                        'X', 'X', 'X', 'X',
                        'X', 'F', 'C', 'F'
                    ]
                ]
                expect(Main.invoke({
                    seatPattern: [[3, 2], [4, 3], [2, 3], [3, 4]],
                    seatType: ["A", "W", "C"],
                    totalSeats: 30
                })).eql(result)
            }),
            it('should be able to create pattern for available seats', () => {


                const result = [['F']]
                expect(Main.invoke({
                    seatPattern: [[1, 1]],
                    seatType: ["A", "W", "C"],
                    totalSeats: 1
                })).eql(result)
            }),
            it('should be window seat if one seat is only provided', () => {

                const result = [['W']]
                expect(Main.invoke({
                    seatPattern: [[1, 1]],
                    seatType: ["A", "W", "C"],
                    totalSeats: 0
                })).eql(result)
            }),
            it('should be window seats if two seat is only provided', () => {

                const result = [['W', "W"], ['W', "W"]]
                expect(Main.invoke({
                    seatPattern: [[2, 2]],
                    seatType: ["A", "W", "C"],
                    totalSeats: 0
                })).eql(result)
            })
    })

})



