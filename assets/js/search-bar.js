jQuery.easing.def = "easeInQuart";
var searchBarON = false;
function startSearch() {
    if (searchBarON == false) {
        $('#search-bar').animate({ width: '400px' });
        $('#search-clean').show();
    }
}
function closeSearchBar() {
    var thing2Search=$("#search-input").val();
    if (thing2Search == "") {
        $('#search-bar').animate({ width: '40px' });
    } else {
        $("#search-input").val("");
    }
}
