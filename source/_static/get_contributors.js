(function ($) {
    var TOKEN = "fa796907de07130d1c47d98dc7050a08cac168de";
    var ROOT_URL = "http://api.github.com";
    var params = "?access_token=" + TOKEN;
    var TEAMID = "2032450";
    var TEAM_MEMBERS_URL = ROOT_URL + "/teams/" + TEAMID + "/members" + params;
    var ORG_REPOS_URL = ROOT_URL + "/orgs/shelleg/repos" + params;

    var container = $("#contributors_dynamic");
    var contributors_table = $('#contributors_data');

    var repos_stats = [];
    var users_stats = [];

    var repos_ready = false;
    var users_ready = false;

    $.get(ORG_REPOS_URL)
        .done(function (data) {
            fetchStats(data);
            repos_ready = true;
        });

    $.get(TEAM_MEMBERS_URL)
        .done(function (data) {
            users_stats = data;
            users_ready = true;
        });

    function fetchStats(data) {
        $.each(data, function (index, item) {
            $.get(ROOT_URL + "/repos/shelleg/" + item.name + "/stats/contributors" + params)
                .done(function (data) {
                    repos_stats.push({ repo_name: item.name, repo_data: data });
                });
        });
    }

    var renderData = setInterval(function () {
        if (users_ready && repos_ready) {
            clearInterval(renderData);
            renderMembers(users_stats);
            renderStats(repos_stats);

        }
    }, 1000);

    function renderStats(repos_stats) {
        $.each(repos_stats, function (index, repo) {
            var repo_name = repo.repo_name;
            var repo_data = repo.repo_data;
            console.log(repo_data);
            $.each(repo_data, function (i, data) {
                $("td[data-login='" + data.author.login + "']").append(repo_name + "<br>");
                $("td[data-login='" + data.author.login + "']").next().append(data.total + "<br>");
            });
        });
    }

    function renderMembers(data) {
        $.each(data, function (index, item) {
            var tr = $('<tr>');
            var avatar_img = $("<img>", { src: item.avatar_url, class: "github_avatar" });
            var avatar_td = $("<td>").html(avatar_img);

            var login_link = "<a href=" + item.html_url + ">" + item.login + "</a>";
            var username_td = $('<td>').html(login_link);

            tr.append(avatar_td)
                .append(username_td)
                .append($('<td>'))
                .append($('<td>', { 'data-login': item.login }))
                .append($('<td>'));

            // getSingleUser(item.login, function (user_data) {
            //     first_name = $('<td>').html(user_data.name);
            //     tr.append(avatar_td)
            //         .append(username_td)
            //         .append(first_name)
            //         .append($('<td>', { 'data-login': item.login }));
            // });
            contributors_table.append(tr);
        });
    }

    function getSingleUser(username, callback) {
        $.get(ROOT_URL + "/users/" + username + params)
            .done(function (data) {
                callback(data);
            });
    }

})($);
