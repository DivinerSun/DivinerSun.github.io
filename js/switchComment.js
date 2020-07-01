$("#commentValine").click(function () {
    if ($("#commentValine").attr("disabled") === "disabled") {
        return;
    } else {
        $("#vcomments").css("display", "block");
        $("#lv-container").css("display", "none");
        $("#gitalk-container").css("display", "none");

        $("#commentValine").attr("class", "checked");
        $("#commentLivere").attr("class", "");
        $("#commentGitalk").attr("class", "");

        $("#commentValine").attr("disabled", "disabled");
        $("#commentLivere").attr("disabled", false);
        $("#commentGitalk").attr("disabled", false);
    }
});
$("#commentLivere").click(function () {
    if ($("#commentLivere").attr("disabled") === "disabled") {
        return;
    } else {
        $("#lv-container").css("display", "block");
        $("#vcomments").css("display", "none");
        $("#gitalk-container").css("display", "none");

        $("#commentValine").attr("class", "");
        $("#commentLivere").attr("class", "checked");
        $("#commentGitalk").attr("class", "");

        $("#commentLivere").attr("disabled", "disabled");
        $("#commentValine").attr("disabled", false);
        $("#commentGitalk").attr("disabled", false);
    }
});
$("#commentGitalk").click(function () {
    if ($("#commentGitalk").attr("disabled") === "disabled") {
        return;
    } else {
        $("#gitalk-container").css("display", "block");
        $("#lv-container").css("display", "none");
        $("#vcomments").css("display", "none");

        $("#commentValine").attr("class", "");
        $("#commentLivere").attr("class", "");
        $("#commentGitalk").attr("class", "checked");

        $("#commentGitalk").attr("disabled", "disabled");
        $("#commentLivere").attr("disabled", false);
        $("#commentValine").attr("disabled", false);
    }
});
