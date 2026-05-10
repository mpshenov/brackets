module.exports = function check(str, bracketsConfig) {
    const stack = [];

    for (const char of str) {

        let pair = null;

        for (let i = 0; i < bracketsConfig.length; i++) {
            const currentPair = bracketsConfig[i];

            const open = currentPair[0];
            const close = currentPair[1];

            const lastOpenedBracket = stack[stack.length - 1];

            if (open === lastOpenedBracket && close === char) {
                pair = currentPair;
                break;
            }
        }
        if (pair) {
            stack.pop();
        } 
        else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
const str = "([{}])";

const bracketsConfig = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}']
];