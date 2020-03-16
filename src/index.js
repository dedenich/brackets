module.exports = function check(str, bracketsConfig) {
  let newStr = str;
    let length;
    let configArr= [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        let element = bracketsConfig[i].map(
                        val => Number.isInteger(+val) ? val : '\\' + val
                    ).join('');

        configArr.push(element);   
    }

    let regexp = new RegExp(`(${configArr.join('|')})`, 'g');

    do {
        length = newStr.length;
        newStr = newStr.replace(regexp, '');
    } while (length !== newStr.length);

    return newStr.length ? false : true;
}
