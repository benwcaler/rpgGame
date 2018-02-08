$(document).ready(function () {
    var playerSelected = false;
    var attackPower = 0;
    var health = 0;

    var frodo = {
        hp: 100,
        ap: 20,
        ca: 25,
        pchar: false
    };

    var samwise = {
        hp: 150,
        ap: 10,
        ca: 15,
        pchar: false
    };

    var gollum = {
        hp: 120,
        ap: 15,
        ca: 15,
        pchar: false
    };

    var sauron = {
        hp: 200,
        ap: 20,
        ca: 25,
        pchar: false
    };

    $(".char").on("click", function () {
        if (playerSelected === false) {
            playerSelected = true;
            $(".char").css("background-color", "red");
            $(this).css("background-color", "green");
            if (this.id === "frodo") {
                $(this).css("top", "290px");
                $(this).css("left", "-100px");
            } else if (this.id === "samwise") {
                $(this).css("top", "290px");
                $(this).css("left", "-300px");
            } else if (this.id === "gollum") {
                $(this).css("top", "290px");
                $(this).css("left", "-500px");
            } else if (this.id === "sauron") {
                $(this).css("top", "340px");
                $(this).css("left", "-650px");
            }
        }
    })
})