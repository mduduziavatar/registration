function RegNumber(stored) {
    var userMappedData = stored || [];

    function RegNumbers(items) {
        //if input is not empty
        if (items !== "") {
            //checks if conditions are met & if item has been used before
            if (/C[AYJ] \d{3,6}$/.test(items) && !userMappedData.includes(items)) {
                //conditions met then push to regList
                userMappedData.push(items)
            }
        }
    }

    // function displaying registrations
    function selectedRadio(town) {
        if (town == "all") {
            return userMappedData;
        } else {
            var list = [];
            for (var i = 0; i < userMappedData.length; i++) {
                if (userMappedData[i].startsWith(town)) {
                    list.push(userMappedData[i])
                }
            }
            return list;
        }
    }
    // this is for local storage
    function getAllRegNum() {
        return userMappedData;
    }

    return {
        RegNumbers,
        getAllRegNum,
        selectedRadio

    }
}