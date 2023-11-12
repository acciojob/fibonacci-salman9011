function fibnocci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 0;
    } else {
        let prev = 0;
        let current = 1;

        for (let i = 2; i <= num; i++) {
            let next = prev + current;
            prev = current;
            current = next;
        }

        return prev;
    }
}

module.exports = fibnocci;
