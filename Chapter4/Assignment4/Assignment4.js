$(document).ready(function() {
    createDOM();

});

function createDOM() {
    $.ajax({
        url: "http://localhost:3000/actors",
        success: function(result) {
            var act1 = "";
            var actid;
            var category;
            var rating;
            var flag;
            var p;

            p = "person";
            var newrow;
            act1 = result;
            for (var i = 0, len = act1.length; i < len; i++) {
                category = act1[i].name;
                rating = act1[i].starred;
                actid = act1[i].id;
                console.log(actid);
                if (rating === true) {
                    flag = "star";
                } else {
                    $("#rating").append("star_border");
                    flag = "star_border";
                }
                newrow = "<div class=\"mdl-list__item\">" +
                    "<span class=\"mdl-list__item-primary-content\">" +
                    "<i class=\"material-icons mdl-list__item-avatar\">" + p + "</i>" + "<span id =\"category\">" + category + "</span>" +
                    "</span>" +
                    "<span class=\"mdl-list__item-secondary-content\">" +
                    "<a class=\"mdl-list__item-secondary-action\" href='#'>" +
                    "<i class=\"material-icons\" onclick=\"toggleStar(" + actid + ",'" + category + "'," + rating + ")\">" +
                    flag + "</i>" + "</a>" +
                    "</span>" + "</div>";
                $("#list").append(newrow);
                //countStrar = countStrar +1;
            }
        }
    });
}

function button1() {

    //console.log(input);

    var input = document.getElementById("actortext").value;
    var j = JSON.parse('{"name":"' + input + '","starred":false}');


    $.ajax({
        url: "http://localhost:3000/actors",
        type: "POST",
        dataType: "json",
        data: j,
        success: function(data) {
            $("#list").empty();
            createDOM();
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    });
}




function toggleStar(actid, category, rating) {
    var data1;
    if (rating) {
        data1 = {
            name: category,
            starred: false
        };

    } else {
        data1 = {
            name: category,
            starred: true
        };
    }

    $.ajax({
        url: "http://localhost:3000/actors/" + actid,
        dataType: "json",
        type: "PUT",
        // contentType: 'application/json; charset=utf-8',
        data: data1,
        //async: true,
        //processData: false,
        //cache: false,
        success: function(response) {
            $("#list").empty();
            createDOM();
        },
        error: function(response) {
            //reateDOM();
        }
    });
}