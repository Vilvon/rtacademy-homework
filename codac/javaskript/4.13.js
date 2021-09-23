
function summ(num1 , num2)
{
    if(num1 == num2)
    {
        return num2;
    }
    return num1 + summ(++num1, num2);
}

let summ1 = (num1,num2) => (num1 == num2) ? num2:(num1 + summ1(++num1, num2))

console.log(summ1(4,5));