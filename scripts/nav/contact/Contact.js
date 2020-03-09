export const Contact = (contactObject) => {
    return `
        <div>
            ${contactObject.infoType}: ${contactObject.info}
        </div>
    `
}