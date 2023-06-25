// Closure

function calc(x, y){
    const msg = `O resultado da operação:`;

    const sum = () => `${msg} ${x} + ${y} = ${x + y}`;

    const sub = () => `${msg} ${x} - ${y} =  ${x - y}`;

    const mult = () => `${msg} ${x} * ${y} =  ${x * y}`;
    
    const div = () => `${msg} ${x} / ${y} =  ${x / y}`;

    return{
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div()
    }
}

console.log(calc(12, 4));