
export const kStairs = (numSteps: number, maxNumSkippedSteps: number) => {
    const memo = Array(numSteps+1).fill(0);

    memo[0] = 1;

    for(let stepNumber = 1; stepNumber <= numSteps; stepNumber += 1) {
        const maxSkipSteps = Math.min(stepNumber, maxNumSkippedSteps);

        for (let skipSteps = 1; skipSteps <= maxSkipSteps; skipSteps += 1) {
            memo[stepNumber] += memo[stepNumber - skipSteps];
        }
    }

    return memo[numSteps];
};

console.log(
    kStairs(2, 2),
    kStairs(3, 2),
    kStairs(45, 2),
);