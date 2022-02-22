const fullNames = [
    {
        first: 'Aldrin John',
        last: 'Tamayo'
    },
    {
        first: 'Travis John',
        last: 'Tamayo'
    },
    {
        first: 'John Michael',
        last: 'Tamayo'
    },
    {
        first: 'Paolo',
        last: 'Llarinas'
    },
    {
        first: 'Mark',
        last: 'Delos Santos'
    },
    {
        first: 'George',
        last: 'Vigilla'
    },
]

const firstNames = fullNames.map(firstName => {
    return firstName.first;
})

console.log(firstNames);
