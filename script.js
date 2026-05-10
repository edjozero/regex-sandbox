const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("text-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    let flags = "";
    if(caseInsensitiveFlag.checked){
        flags += "i";
    }
    if(globalFlag.checked){
        flags += "g";
    }
    return flags;
};