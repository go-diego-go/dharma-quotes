var utils = {
    hasDuplicates: function(property, array) {
        var testObject = {};

        return array.some(function(item) {
            var itemProperty = item[property],
                isDuplicated = itemProperty in testObject;
            if (isDuplicated) {
                console.log('Found duplicate: ' + itemProperty);
            } else {
                testObject[itemProperty] = item;
            }
            return isDuplicated;
        });
    }
};

module.exports = utils;
