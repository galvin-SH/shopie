module.exports = (str) => {
    let targetIndex;
    while (str.includes("_")) {
        targetIndex = str.indexOf("_");
        str =
            str.slice(0, targetIndex) +
            str[targetIndex + 1].toUpperCase() +
            str.slice(targetIndex + 2);
        str = str.slice(0, targetIndex) + " " + str.slice(targetIndex);
    }

    return str;
};
