describe("The Reg Number factory function", function() {

    it("should check if item entered is not empty", function() {
        var regChecker = RegNumber();
        var item = "";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), []);
    });

    it("should add all CA reg numbers to the list", function() {
        var regChecker = RegNumber();
        var item = "CA 554456";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), ["CA 554456"]);
    });

    it("should add all CY reg numbers to the list", function() {
        var regChecker = RegNumber();
        var item = "CY 224456";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), ["CY 224456"]);
    });

    it("should add all CJ reg numbers to the list", function() {
        var regChecker = RegNumber();
        var item = "CJ 351456";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), ["CJ 351456"]);
    });

    it("should not add CK reg numbers to the list", function() {
        var regChecker = RegNumber();
        var item = "CK 554456";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), []);
    });

    it("should not add CM reg numbers to the list", function() {
        var regChecker = RegNumber();
        var item = "CM 554456";
        regChecker.RegNumbers(item);
        assert.deepEqual(regChecker.getAllRegNum(), []);
    });

    it("should filter for Cape Town when selected radio CA", function() {
        var regChecker = RegNumber(["CA 151515", "CJ 321456", "CY 987456"]);
        var item = "CA";
        assert.deepEqual(regChecker.selectedRadio(item), ["CA 151515"]);
    });

    it("should filter for Paarl when selected radio CJ", function() {
        var regChecker = RegNumber(["CA 151515", "CJ 321456", "CY 987456"]);
        var item = "CJ";
        assert.deepEqual(regChecker.selectedRadio(item), ["CJ 321456"]);
    });

    it("should filter for Bellville when selected radio CY", function() {
        var regChecker = RegNumber(["CA 151515", "CJ 321456", "CY 987456"]);
        var item = "CY";
        assert.deepEqual(regChecker.selectedRadio(item), ["CY 987456"]);
    });

    it("should filter for Show all when selected radio all", function() {
        var regChecker = RegNumber(["CA 151515", "CJ 321456", "CY 987456"]);
        var item = "all";
        assert.deepEqual(regChecker.selectedRadio(item), ["CA 151515", "CJ 321456", "CY 987456"]);
    });

});