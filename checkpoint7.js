function myCalculator (num1, num2, num3, num4) {
    sum1 = num1+num2;
    sum2 = num3+num4;
    product = sum1 * sum2;
    if (product > 50) {
        return "¡El número es mayor que 50!";
    } else {
        return "¡El número es menor que 50!";
    }
};
console.log(myCalculator(4,13,22,3));