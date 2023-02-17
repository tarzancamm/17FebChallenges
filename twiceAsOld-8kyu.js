// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}


console.log(twiceAsOld(36, 7))
console.log(twiceAsOld(29, 0))
console.log(twiceAsOld(55, 30))