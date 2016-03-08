/*jshint browser:true*/
/*globals $*/
/*globals _*/
var main = function() {

    "use strict";

    var arr = [];

    var arrstring = [];

    var searchstring;

    var searchnstring;

    var n;

    var $new_comment;

    var addCommentFromInputBox = function() {

        var $new_comment;

        if ($(".comment-input input").val() !== "") {

            arr.push(parseInt(document.getElementById("counter").value, 10));

            $new_comment = $("<div>").text($(".comment-input input").val());

            // $new_comment.hide();

            $(".comments").append($new_comment);

            $new_comment.fadeIn();

            $(".comment-input input").val("");

            console.log(arr);

        }

    };

    var addstrings = function() {

        console.log("fwrf");

        var $new_string;

        if ($(".commentstring-input input").val() !== "") {

            arrstring.push(document.getElementById("counterstring").value);

            $new_string = $("<div>").text($(".commentstring-input input").val());

            $(".commentstring").append($new_string);

            console.log(arrstring);

            $new_string.fadeIn();

            $(".commentstring-input input").val("");

        }

    };



    var exercise1 = function(arr) {

        console.log("exercise1");

        var avg = 0;

        var l = 0;

        l = arr.length;

        var i;

        for (i = 0; i < l; i++) {

            avg = avg + arr[i];

        }

        avg = avg / l;

        console.log(avg);

        return avg;

    };



    var exercise2 = function(arr) {

        console.log("exercise2");

        var largest = 0;

        largest = arr[0];

        var l = 0;

        l = arr.length;

        var i;

        for (i = 1; i < l; i++) {

            if (arr[i] > largest) {

                largest = arr[i];

            }

        }

        console.log(largest);

        return largest;

    };



    var exercise3 = function(arr) {

        console.log("exercise3");

        var even = 0;

        var l = 0;

        l = arr.length;

        var i;



        for (i = 0; i < l; i++) {

            if (arr[i] % 2 === 0) {

                even = 1;

            }

        }

        console.log(even);

        if (even === 1) {

            return true;

        } else {

            return false;

        }

    };



    var exercise4 = function(arr) {

        console.log("exercise4");

        var alleven = 1;

        var l = 0;

        l = arr.length;

        var i;



        for (i = 0; i < l; i++) {

            if (arr[i] % 2 !== 0) {

                alleven = 0;

            }

        }

        console.log(alleven);

        if (alleven === 1) {

            return true;

        } else {

            return false;

        }

    };



    var arrayContains = function(arrstring, searchstring) {

        console.log("arraycontains");

        var l = 0;

        l = arrstring.length;

        var i;

        var contain;



        contain = 0;

        for (i = 0; i < l; i++) {

            if (arrstring[i] === searchstring) {

                console.log(arrstring[i]);

                contain = 1;

            }

        }

        console.log(contain);

        if (contain === 1) {

            return true;

        } else {

            return false;

        }

    };



    var arrayContainsTwo = function(arrstring, searchstring) {

        console.log("arraycontains");

        var l = 0;

        l = arrstring.length;

        var i;



        var counter;

        counter = 0;

        for (i = 0; i < l; i++) {

            if (arrstring[i] === searchstring) {

                counter = counter + 1;

            }

        }

        console.log(counter);

        if (counter >= 2) {

            return true;

        } else {

            return false;

        }

    };



    var arrayContainsNTimes = function(arrstring, searchstring, n) {

        console.log("array");

        console.log(searchstring);

        var l = 0;

        l = arrstring.length;

        var i;



        var counter;

        counter = 0;

        for (i = 0; i < l; i++) {

            if (arrstring[i] === searchstring) {

                counter = counter + 1;

            }

        }

        console.log(counter);

        if (counter === n) {

            return true;

        } else {

            return false;

        }



    };




    var exercise5 = function(arrstring) {

        console.log("exercise5");

        if ($("#stringsearch").val() !== "") {

            searchstring = document.getElementById("stringsearch").value;

            console.log(searchstring);

            $("#stringsearch").val("");

            var m = arrayContains(arrstring, searchstring);

            $new_comment = $("<div>").text("Contains in Array  : " + m);

            $(".commentstring").append($new_comment);

            return true;

        }

    };



    var exercise6 = function(arrstring) {

        console.log("exercise6");

        if ($("#stringsearch").val() !== "") {

            searchstring = document.getElementById("stringsearch").value;

            console.log(searchstring);

            var m = arrayContainsTwo(arrstring, searchstring);

            $new_comment = $("<div>").text("Contains Atleast 2 times in Array  : " + m);

            $(".commentstring").append($new_comment);

            $("#stringsearch").val("");

            return true;

        }

    };



    var exercise7 = function(arrstring) {

        if ($("#stringnsearch").val() !== "") {

            searchnstring = document.getElementById("stringnsearch").value;

        }

        $("#stringnsearch").val("");

        if ($("nstring").val() !== "") {

            n = document.getElementById("nstring").value;

            console.log(n);

            var m = arrayContainsNTimes(arrstring, searchnstring, n);

            $new_comment = $("<div>").text("Contains " + n + " times in Array  : " + m);

            $(".commentstring").append($new_comment);

            $("#nstring").val("");

            return true;

        }

    };



    var exercise8 = function(arr) {

        console.log("exercise8");

        var largest = _.max(arr);

        return largest;

    };




    $(".comment-input button").on("click", function() {

        addCommentFromInputBox();

    });

    $("#average").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var avgg = exercise1(arr);

            $new_comment = $("<div>").text("Average  :  " + avgg);

            $(".comments").append($new_comment);

        }

    });

    $("#largest").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var largest = exercise2(arr);

            $new_comment = $("<div>").text("Largest  :  " + largest);

            $(".comments").append($new_comment);

        }

    });

    $("#even").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var even = exercise3(arr);

            $new_comment = $("<div>").text("Atleast One Even :" + even);

            $(".comments").append($new_comment);

        }

    });

    $("#alleven").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var alleven = exercise4(arr);

            $new_comment = $("<div>").text("All Even  :" + alleven);

            $(".comments").append($new_comment);

        }

    });

    $("#clear").on("click", function() {

        $(".comments").empty();

        $(".commentstring").empty();

        arr.length = 0;

    });

    $("#add").on("click", function() {

        addstrings();

    });

    $("#search").on("click", function() {

        if (arrstring.length === 0) {

            window.alert("Array is empty");

        } else {

            exercise5(arrstring);

        }

    });

    $("#search2").on("click", function() {

        if (arrstring.length === 0) {

            window.alert("Array is empty");

        } else {

            exercise6(arrstring);

        }

    });

    $("#searchn").on("click", function() {

        if (arrstring.length === 0) {

            window.alert("Array is empty");

        } else {

            exercise7(arrstring);

        }

    });

    $("#largestunder").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var largest = exercise8(arr);

            $new_comment = $("<div>").text("Largest in array using Underscore :" + largest);

            $(".comments").append($new_comment);

        }

    });

    $("#evenunder").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var even = _.some(arr, function(num) {

                return num % 2 === 0;

            });

            $new_comment = $("<div>").text("Atleast One Even using Underscore :" + even);

            $(".comments").append($new_comment);

        }

    });



    $("#allevenunder").on("click", function() {

        if (arr.length === 0) {

            window.alert("Array is empty");

        } else {

            var alleven = _.every(arr, function(num) {

                return num % 2 === 0;

            });

            $new_comment = $("<div>").text("All even in Array Even using Underscore :" + alleven);

            $(".comments").append($new_comment);

        }

    });

    $(".comment-input input").on("keypress", function() {

        if (event.keyCode === 13) {

            addCommentFromInputBox();

        }

    });

};



$(document).ready(main);