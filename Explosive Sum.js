function sum(num) {
    const ai = new Array(num + 1).fill(0);
    ai[0] = 1;
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j++) {
            ai[j] += ai[j - i];
        }
    }
    return ai[num];
}
  //by aziz ammar