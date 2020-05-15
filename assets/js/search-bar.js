jQuery.easing.def = "easeInQuart";

$(document).ready(function () {
    $('#btn-search').click(function () {
        $('#search-bar').show();
        $('#btn-search').hide();
        $('#search-bar').animate({ width: '400px' });
        $('#search-clean').show();
    });
});
function closeSearchBar() {
    if (document.getElementById("btn-search").value == "") {
        $('#search-clean').animate({ display: 'none' });
        $('#search-bar').animate({ width: '40px' });
        $('#search-bar').animate({ display: 'none' });
        $('#btn-search').animate({ display: 'inline' });
    } else {
        document.getElementById("btn-search").value = "";
    }
}
