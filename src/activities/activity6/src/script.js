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

const getFirstname = fullNames.map(firstname => {
    return firstname.first;
})

console.log(getFirstname);
