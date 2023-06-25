// Closure

function calc(x, y){
    const msg = `O resultado da operação:`;

    const sum = () => {
        return `${msg} ${x} + ${y} = ${x + y}`;
    }

    const sub = () => {
        return `${msg} ${x} - ${y} =  ${x - y}`;
    }

    const mult = () => {
        return `${msg} ${x} * ${y} =  ${x * y}`;
    }

    const div = () => {
        return `${msg} ${x} / ${y} =  ${x / y}`;
    }

    return{
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div()
    }
}

console.log(calc(12, 4));