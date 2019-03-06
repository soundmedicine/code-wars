/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

valid inputs: 
1.2.3.4
123.45.67.89

invalid inputs: 
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089*/

function isValidIP(str) {
    //split string on period
    const octets = string.split('.');
    // if length is not 4
    if (octets.length !== 4) {
        // return false
        return false;
    }

    // else, iterate over octets
    for (let i=0; i < octets.length; i++) {
        const value = octets[i];
        // if current value is not between 0 and 255
        if (!value.match(/^\d+$/)) {
            // return false
            return false;
        } else if (value.length > 1 && value[0]=== '0') {
            return false;
        } else if (value < 0 || value > 255) {
            return false;
        }
    }
    return true;
  }

function isValidIP(str) {
    const octets = str.split('.');

    if (octets.length !== 4) {
        return false;
    }

    return octets.every((value) => {
        if (!value.match(/^\d+$/)) {
          return false;
        } else if (value < 0 || value > 255) {
           return false;
        } else if (value.length > 1 && value[0] === '0') {
          return false;
        }
          return true;
    });
  }


// Best Practice
  function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
  }