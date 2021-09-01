const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China';
const women = f => f.genero === 'F';
const lowestSalary = (employee, currentEmp)=>{
    return employee.salario < currentEmp.salario ? employee : currentEmp;
};

axios.get(url).then(response => {
    const employee = response.data

    //Chinese women with the lowes salary
    const result = employee
    .filter(chineses)
    .filter(women)
    .reduce(lowestSalary)

    console.log(result)
})