let n = 5;

for (let i = 0; i < n; i++) {
    let line = '';
    for (let s = 0; s < i; s++) {
        line += ' ';
    }
    let nums = [];
    for (let j = 0; j < n - i; j++) {
        if (j === 0 || j === n - i - 1) {
            nums.push(1);
        } else {
            nums.push(n - i - j);
        }
    }

    line += nums.join(' ');
    console.log(line);
}