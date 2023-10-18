var getSum = function(a, b) {
    while (b !== 0) {
        const sum = a ^ b;
        const carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    return a;
};
