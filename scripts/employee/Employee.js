let i = 0;
const Employee = (employeeObject) => {
    i = i+1;
    return `
        <div id ="first-name">${i}.${employeeObject.firstName}</div>
    `
}

export default Employee