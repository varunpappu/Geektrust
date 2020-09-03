export class Kingdom {
    private kingdomName: string
    private emblem: string
    private kingdomAllies: Map<string, Kingdom>


    constructor(kingdomName: string, emblem: string) {
        this.kingdomName = kingdomName
        this.emblem = emblem
        this.kingdomAllies = new Map()
    }

    getKingdomName(): string {
        return this.kingdomName
    }

    setKingdomName(kingdomName: string): void {
        this.kingdomName = kingdomName
    }

    getEmblem(): string {
        return this.emblem
    }

    setEmblem(emblem: string): void {
        this.emblem = emblem
    }

    setKingdomAllies(kingdom: Kingdom): void {
        this.kingdomAllies.set(kingdom.getKingdomName(), kingdom)
    }

    getKingdomAllies(): Map<string, Kingdom> {
        return this.kingdomAllies;
    }

    getKingdomAlliesToString(): string {
        const kingdomAllies = this.getKingdomAllies()
        if (kingdomAllies.size < 3) {
            return "NONE"
        }
        let allies: string = this.getKingdomName()
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const [key, _value] of kingdomAllies.entries()) {
            allies += ` ${key}`
        }
        return allies
    }

    getKingdomEncryptedCode(): string {
        const emblem: string = this.getEmblem()
        const emblemLength: number = emblem.length

        const encryptedMessage = emblem.split("").map(key => {
            let charCode = key.charCodeAt(0) + emblemLength
            if (key.charCodeAt(0) + emblemLength > 90) {
                charCode = 65 + (charCode - 91)
            }
            return String.fromCharCode(charCode)
        }).join("")
        return encryptedMessage
    }
}
