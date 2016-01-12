'use_strict'
app.factory('dboperations', function ($http, myConfig) {
    function saveHouseDetails(data) {
        var membersAPI = myConfig.url + "/api/dbstore/saveHouseDetails";
        return $http.post(membersAPI, {data: data});
    }

    function getHouseDetails() {
        var membersAPI = myConfig.url + "/api/dbstore/" + getHouseDetails;
        return $http.get(membersAPI);
    }

    function saveRentDetails(data) {
        var membersAPI = myConfig.url + "/api/dbstore/saveRentDetails";
        return $http.post(membersAPI, {data: data});
    }

    function getRentDetails(data) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentDetails";
        return $http.get(membersAPI);
    }

    function getAllSellHouseOfMine() {
        var membersAPI = myConfig.url + "/api/dbstore/getAllSellHouseOfMine";
        return $http.get(membersAPI);
    }

    function getAllRentHouseOfMine() {
        var membersAPI = myConfig.url + "/api/dbstore/getAllRentHouseOfMine";
        return $http.get(membersAPI);
    }

    function updateSaleHouseDetails(data) {
        var membersAPI = myConfig.url + "/api/dbstore/updateSaleHouseDetails";
        return $http.post(membersAPI, {data: data});
    }

    function updateRentHouseDetails(data) {
        var membersAPI = myConfig.url + "/api/dbstore/updateRentHouseDetails";
        return $http.post(membersAPI, {data: data});
    }

    function getRentHouseDetails(id) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentHouseDetails";
        return $http.post(membersAPI, {id: id});
    }

    function getSaleHouseDetails(id) {
        var membersAPI = myConfig.url + "/api/dbstore/getSaleHouseDetails";
        return $http.post(membersAPI, {id: id});
    }

    function getSaleHousePictureList(id,i,needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getSaleHousePictureList";
        return $http.post(membersAPI, {id: id, index:i, auth:needauth});
    }

    function getRentHousePictureList(id,i,needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentHousePictureList";
        return $http.post(membersAPI, {id: id, index:i, auth:needauth});
    }


    function getSaleHouseVideoList(id, index,needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getSaleHouseVideoList";
        return $http.post(membersAPI, {id: id, index:index, auth:needauth});
    }

    function getRentHouseVideoList(id, index,needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentHouseVideoList";
        return $http.post(membersAPI, {id: id, index:index, auth:needauth});
    }

    function getRentHouseVideo360List(id) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentHouseVideo360List";
        return $http.post(membersAPI, {id: id});
    }

    function getSaleHouseVideo360List(id) {
        var membersAPI = myConfig.url + "/api/dbstore/getSaleHouseVideo360List";
        return $http.post(membersAPI, {id: id});
    }

    function getSaleHouse360PictureList(id,i, needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getSaleHouse360PictureList";
        return $http.post(membersAPI, {id: id, index:i, auth:needauth});
    }
    function getRentHouse360PictureList(id,i, needauth) {
        var membersAPI = myConfig.url + "/api/dbstore/getRentHouse360PictureList";
        return $http.post(membersAPI, {id: id, index:i, auth:needauth});
    }

    function GetSaleHouseQueryResults(query,needauth) {
        var membersAPI = myConfig.url + "/api/salequery/GetSaleHouseQueryResults";
        return $http.post(membersAPI, {query:query, auth:needauth});
    }



    return {
        getSaleHousePictureList:getSaleHousePictureList,
        getRentHousePictureList:getRentHousePictureList,
        saveHouseDetails: saveHouseDetails,
        getHouseDetails: getHouseDetails,
        saveRentDetails: saveRentDetails,
        getRentDetails: getRentDetails,
        getAllSellHouseOfMine: getAllSellHouseOfMine,
        getAllRentHouseOfMine: getAllRentHouseOfMine,
        updateSaleHouseDetails: updateSaleHouseDetails,
        updateRentHouseDetails: updateRentHouseDetails,
        getSaleHouseDetails:getSaleHouseDetails,
        getSaleHouse360PictureList:getSaleHouse360PictureList,
        getSaleHouseVideoList:getSaleHouseVideoList,
        getRentHouseVideoList:getRentHouseVideoList,
        getSaleHouseVideo360List:getSaleHouseVideo360List,
        GetSaleHouseQueryResults:GetSaleHouseQueryResults,
        getRentHouse360PictureList:getRentHouse360PictureList

    };


});