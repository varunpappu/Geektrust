import { UniverseOfKingdoms } from "./universe-of-kingdom"
import { alphabetCounter } from "../common/helpers"
import { SecretMessages } from "../file-reader/typings"

export class KingdomAlliances {

    static invoke(kingdomName: string, universeOfKingdoms: UniverseOfKingdoms, kingdomsSecretMessages: SecretMessages): void {

        const kingdomSeekingAlliance = universeOfKingdoms.getKingdom(kingdomName)
        for (const kingdom in kingdomsSecretMessages) {

            const secretMsgRcvdKingdom = universeOfKingdoms.getKingdom(kingdom)

            if (secretMsgRcvdKingdom) {
                const secretMsgRcvdKingdomCode = secretMsgRcvdKingdom.getKingdomEncryptedCode()
                const secretMsgRcvdKingdomAlphabetCount = secretMsgRcvdKingdomCode?.split("").reduce(alphabetCounter, {})
                const allianceMessageAlphabetCount = kingdomsSecretMessages[kingdom].split("").reduce(alphabetCounter, {})

                const isAlliance = KingdomAlliances.checkForAlliance(secretMsgRcvdKingdomAlphabetCount, allianceMessageAlphabetCount)

                if (isAlliance && secretMsgRcvdKingdom) {
                    kingdomSeekingAlliance?.setKingdomAllies(secretMsgRcvdKingdom)
                }
            }
        }

        const kingdomAlliances = kingdomSeekingAlliance?.getKingdomAlliesToString()
        console.log(kingdomAlliances)
    }

    static checkForAlliance(secretMsgRcvdKingdomAlphabetCount: AlphabetCount, allianceMessageAlphabetCount: AlphabetCount): boolean {
        for (const alphabet in secretMsgRcvdKingdomAlphabetCount) {
            if (!allianceMessageAlphabetCount[alphabet] || secretMsgRcvdKingdomAlphabetCount[alphabet] > allianceMessageAlphabetCount[alphabet]) {
                return false
            }
        }
        return true
    }
}

interface AlphabetCount {
    [key: string]: number
}