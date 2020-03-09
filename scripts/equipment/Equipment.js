export const Equipment = (equipmentObject) => {
    return `
        <div class = "equipment__list__info">
            <div>${equipmentObject.model} (${equipmentObject.serialNumber})</div>
            <div>Working?: ${equipmentObject.isFunctional ? "Yes" : "No"}</div>
            <div>Under warranty?: ${equipmentObject.isUnderWarranty ? "Yes" : "No"}</div>
        </div>
    `
}