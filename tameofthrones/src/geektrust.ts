import { FileReader } from "./file-reader/file-reader"
import { UniverseOfKingdoms } from "./kingdom/universe-of-kingdom"
import { southerosKingdoms } from "./constants/constants"
import { KingdomAlliances } from "./kingdom/kingdom-alliances"
import { SecretMessages } from "./file-reader/typings"

class Main {

    static invoke() {
        const inputList: SecretMessages[] = FileReader.invoke()

        for (let i = 0; i < inputList.length; i++) {
            const universeOfKingdoms: UniverseOfKingdoms = Main.initializeKingdoms()
            KingdomAlliances.invoke('SPACE', universeOfKingdoms, inputList[i])
        }

    }

    static initializeKingdoms() {

        const universeOfKingdoms = new UniverseOfKingdoms()
        southerosKingdoms.forEach(southerosKingdom => {
            universeOfKingdoms.setKingdom(southerosKingdom.kingdomName.toUpperCase(), southerosKingdom.emblem.toUpperCase())
        })
        return universeOfKingdoms
    }
}

Main.invoke()