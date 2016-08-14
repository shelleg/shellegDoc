(function ($) {
    var TOKEN = "fa796907de07130d1c47d98dc7050a08cac168de";
    var ROOT_URL = "http://api.github.com";
    var params = "?access_token=" + TOKEN;
    var TEAMID = "2032450";
    var TEAM_MEMBERS_URL = ROOT_URL + "/teams/" + TEAMID + "/members" + params;


    var container = $("#contributors_dynamic");
    var contributors_table = $('#contributors_data');

    $.get(TEAM_MEMBERS_URL)
        .done(function (data) {
            renderMembers(data);
        });

    function getSingleUser(username, callback) {
        $.get(ROOT_URL + "/users/" + username + params).done(function (data) {
            callback(data);
        });
    }

    function renderMembers(data) {
        console.log('here');
        $.each(data, function (index, item) {
            console.log(item);
            var tr = $('<tr>');

            var avatar_img = $("<img>", { src: item.avatar_url, class: "github_avatar" });
            var avatar_td = $("<td>").html(avatar_img);

            var login_link = "<a href=" + item.html_url + ">" + item.login + "</a>";
            var username_td = $('<td>').html(login_link);

            var first_name = "";
            getSingleUser(item.login, function (user_data) {
                first_name = $('<td>').html(user_data.name);
                tr.append(avatar_td)
                    .append(username_td)
                    .append(first_name);
            });
            contributors_table.append(tr);
        });
    }

})($);
