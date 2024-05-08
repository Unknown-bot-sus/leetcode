function decodeMessage(key: string, message: string): string {
    const mapping = new Map<string, string>();
    let step = 0;

    for (let char of key) {
        if (mapping.get(char) === undefined && char !== " ") {
            const charCode = 'a'.charCodeAt(0) + step;
            mapping.set(char, String.fromCharCode(charCode));
            ++step;
        }
    }

    const decode = new Array(message.length).fill(null)

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        decode[i] = mapping.get(char) ?? char;
    }

    return decode.join("")
};

console.log(
    decodeMessage(
        "the quick brown fox jumps over the lazy dog",
        "vkbs bs t suepuv"
    )
)