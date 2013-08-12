(function () {

    if (document.location.search.match(/[?&]view=pt/)) {
        var bodyContainerDiv = document.getElementsByClassName('bodycontainer');
        if (bodyContainerDiv) {
            bodyContainerDiv = bodyContainerDiv[0];
            var headerTable = bodyContainerDiv.getElementsByTagName('table');
            if (headerTable) {
                bodyContainerDiv.removeChild(headerTable[0]);
            }
            var headerRule = bodyContainerDiv.getElementsByTagName('hr');
            if (headerRule) {
                bodyContainerDiv.removeChild(headerRule[0]);
            }
        }
    }
})();