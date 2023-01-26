/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ip = [];
    for(i = 1; i < 4; i++) {
        for(x = 1; x < 4; x++) {
            for(a = 1; a < 4; a++) {
                for(b = 1; b < 4; b++) {
                    if(i + x + a + b === s.length) {
                        let first = (s.substring(0,i));
                        let second = (s.substring(i, i+x));
                        let third = (s.substring(i+x, i+x+a));
                        let fourth = (s.substring(i+x+a));
                        let str = first + '.' + second + '.' + third + '.' + fourth;
                        if ((str.length === s.length + 3) 
                        && (isValid(first))
                        && (isValid(second))
                        && (isValid(third))
                        && (isValid(fourth))
                        ) {
                            ip.push(str);
                        }
                    }
                }
            }
        }
    }
        return ip;
}


function isValid(sgm) {
    if ((sgm.length > 1 && sgm[0] === '0') ||(Number(sgm) > 255)){
        return false;
    } 
    return true;
}


restoreIpAddresses(25525511135);