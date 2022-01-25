// level {1/2/3}
// level 3

// For question 1

function convertToUpper(user) {
    for (key in user) {
        typeof user[key] == 'string' ? user[key] = user[key].toUpperCase() : (typeof user[key] == 'object' && !Array.isArray(user[key])) ? convertToUpper(user[key]) : user[key].map(item => convertToUpper(item))
    }
}

//===================================================

// For question 2

function countUniqProp(str) {
    var properties = str.split(',');
    var obj = {};
    properties.map(prop => {
        let temp = prop.split(':')
        if (!obj[temp[0]]) {
            obj[temp[0]]=temp[1]
        }
        else {
            let x = obj[temp[0]]
            obj[temp[0]]=+(temp[1])+ +(x)
        }
    })
 return (obj);
    


//===================================================

// For question 3

const isBalanceParam = (str) => {
    let stack = [];
    let x;
    if (str.length == 0) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '{' || str[i] == '(' || str[i] == '[') {
            stack.push(str[i])
            continue;
        }
        switch (str[i]) {
            case '}':
                 x = stack.pop();
                if (x == ']' || x == ')')
                    return false
                break;
            case ')':
                 x = stack.pop();
                if (x == ']' || x == '}')
                    return false
                break;
            case ']':
                 x = stack.pop();
                if (x == '}' || x == ')')
                    return false
                break;
        }
        if (stack.length == 0) return true
        else return false
    
    }
}