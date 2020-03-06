import { useEquipment } from "./equipmentDataProvider.js"
import { Equipment } from "./Equipment.js"

const contentTarget = document.querySelector(".equipmentList")

export const EquipmentList = () => {
    const allEquipment = useEquipment()

    for (const equipment of allEquipment) {
        contentTarget.innerHTML += Equipment(equipment)
    }
}