function isValid(str){

    if (str.length === 0)
    return true

    let char; 
    let stack = [];

    let openingBrackets = ['[', '<', '(']
    let closingBrackets = [']', '>', ')']

    matchesOpen = (val) => (val ==='[' ||  val === '<' || val === '(')
    matchesclose = (val) => (val ===']' || val === '>' || val === ')')

    getOpeningBracket = (val) => {
        switch (val){
            case ']':
                return '[';
            case ')':
                return '(';
            case '>':
                return '<';
            default:
                return '';
        }
    }

    for (let  i = 0; i < str.length; i++){
        char = str[i]
        if (matchesOpen(char)){
            stack.push(char);

        } else if (matchesclose (char)){
            if (stack.pop() !== getOpeningBracket(char)) return false;

        }
    }

    return (stack.length == 0)
}

console.log(isValid(' {[()]} '))
console.log(isValid(' {[(])} '))

console.log(isValid(' {{[[(())]]}} '))




