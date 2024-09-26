export function add (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Expected a number');
    }
    
    return a + b;
}