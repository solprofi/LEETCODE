const DELIM = '#';

const encode = arr => {
    let res = '';

    for (let str of arr) {
        res += str.length + DELIM + str;
    }

    return res;
}

const decode = str => {
    const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        while (str[j] !== DELIM) {
            j++;
        }

        const strLength = Number(str.slice(i, j));
        res.push(str.slice(j + 1, j + 1 + strLength));

        i = j + 1 + strLength;
    }

    return res;
}