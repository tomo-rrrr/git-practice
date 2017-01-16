export var pa = Math.PI;
export function loop (...arg) {
        return arg.reduce((a, b) => {
            return a + b;
        })
    };