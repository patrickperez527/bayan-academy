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
        first: 'Travis Michael',
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

const removeFirstName = fullNames.map(function(firstname){
    return firstname.first.substring(6, '');
})

console.log(removeFirstName);
