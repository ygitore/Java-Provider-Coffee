import { useEmployee } from "./employeeDataProvider.js";
import Employee from './Employee.js'

const contentTarget = document.querySelector('.employees_list')

export const employeeList = () => {
    const employees = useEmployee()
    for (const employeeObject of employees) {
        contentTarget.innerHTML += Employee(employeeObject)
    }
}