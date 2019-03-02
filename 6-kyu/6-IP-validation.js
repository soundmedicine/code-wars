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
    const octet = string.split('.');
    // if length is not 4
    if (octets.length !== 4) {
        // return false
        return false;
    }

    // else, iterate over octets
    for (let i=0; i < octets.length; i++) {
        const value = octets[i];
    }
    // if current value is not between 0 and 255
    // return false

    return true;
  }