import { BusinessName } from "./BusinessName.js"

const contentTarget = document.querySelector('.title_of_site')
export const companyName = () => {
    const businessName = BusinessName()
    contentTarget.innerHTML = `${businessName}`
}