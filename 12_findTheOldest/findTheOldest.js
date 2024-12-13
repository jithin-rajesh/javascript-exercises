function getAge(birthYear, deathYear)
{

    if(!deathYear)
    {
        deathYear = new Date().getFullYear();
    }

    return deathYear - birthYear;
}

function findTheOldest(arr){
    const oldestPerson = arr.reduce((oldest, current) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return (oldestAge < currentAge) ? current : oldest;
    }, arr[0]
    );
    return (oldestPerson);
}
// Do not edit below this line
module.exports = findTheOldest;
