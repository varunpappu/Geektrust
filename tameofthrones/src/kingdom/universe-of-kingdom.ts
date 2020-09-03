import { Kingdom } from "./kingdom"

export class UniverseOfKingdoms {

    private kingdoms: Map<string, Kingdom>

    constructor() {
        this.kingdoms = new Map()
    }

    setKingdom(kingdomName: string, emblem: string): void {
        const newKingdom: Kingdom = new Kingdom(kingdomName, emblem)
        this.kingdoms.set(kingdomName, newKingdom)
    }

    getKingdom(kingdomName: string): Kingdom | undefined {
        return this.kingdoms.get(kingdomName)

    }
}