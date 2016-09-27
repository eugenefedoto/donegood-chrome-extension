$(function () {
    $.get("modal.html", function (data) {
        $("div:first").append(data);
    });
}());