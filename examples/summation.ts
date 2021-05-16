export const sum = (n: number) =>
    Array(n+1)
        .fill(0)
        .map((_, x) => x)
        .reduce<number[]>(
            (memo, el, idx) => {
                if(el === 0) return [0];
                if(el === 1) return [...memo, 1];
                return [...memo, memo[idx-1]+el];
            },
            []
        )[n];

console.log(
    sum(0),
    sum(1),
    sum(5)
);