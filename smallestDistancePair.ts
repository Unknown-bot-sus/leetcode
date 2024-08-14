function smallestDistancePair(nums: number[], k: number): number {
    const max = Math.max(...nums);
    const bucket = new Array(max).fill(0)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const diff = Math.abs(nums[i] - nums[j]);
            ++bucket[diff]
        }
    }

    for (let i = 0; i < bucket.length; i++) {
        k -= bucket[i];
        if (k <= 0) {
            return i;
        }
    }

    return -1;
};

console.log(
    smallestDistancePair(
        [62, 100, 4],
        2
    )
)