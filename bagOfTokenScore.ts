function bagOfTokensScore(tokens: number[], power: number): number {
    tokens = tokens.sort((a, b) => a - b)
    let score = 0;
    let left = 0, right = tokens.length - 1;
    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left]
            ++score;
            ++left;
            continue;
        }
        
        if (score >= 1 && (right - left) !== 0) {
            power += tokens[right]
            --score;
            --right;
            continue
        }

        return score;
    }

    return score;
};

console.log(
    bagOfTokensScore(
        [100,200,300,400],
        200
    )
)

console.log(
    bagOfTokensScore(
        [100],
        50
    )
)

console.log(
    bagOfTokensScore(
        [200, 100],
        150
    )
)