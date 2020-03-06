export const Equipment = (equipmentObject) => {
    return `
        <div>
            <h2>${equipmentObject.model} (${equipmentObject.serialNumber})</h2>
            <div>Working?: ${equipmentObject.isFunctional ? "😇" : "😢"}</div>
            <div>Under warranty?: ${equipmentObject.isUnderWarranty ? "✅" : "😡"}</div>
        </div>
    `
}