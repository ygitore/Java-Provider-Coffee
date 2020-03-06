import { useEquipment } from "./equipmentDataProvider.js";
import { Equipment } from "./Equipment.js";

const contentTarget = document.querySelector('.')

export const equipmentList = () => {
    const equipments = useEquipment()
    for (const equipmentObject of equipments) {
        contentTarget.innerHTML += Equipment(equipmentObject)
    }
}