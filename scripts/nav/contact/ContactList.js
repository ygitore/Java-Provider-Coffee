import { useContactInfo } from "./contactDataProvider.js";
import { Contact } from "./Contact.js";

const contentTarget = document.querySelector('.')

export const contact = () => {
    const contacts = useContactInfo()
    for (const contactObject of contacts) {
        contentTarget.innerHTML += Contact(contactObject)
    }
}