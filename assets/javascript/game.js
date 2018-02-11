$(document).ready(function () {
    var playerSelected = false;
    var combat = false;
    var enemyChosen = false;
    var attacker ;
    var defender ;

    var frodo = {
        hp: 100,
        ap: 20,
        ca: 25,
        pchar: false,
        isEnemy: false,
        isDead: false
    };

    var samwise = {
        hp: 150,
        ap: 10,
        ca: 15,
        pchar: false,
        isEnemy: false,
        isDead: false
    };

    var gollum = {
        hp: 120,
        ap: 15,
        ca: 15,
        pchar: false,
        isEnemy: false,
        isDead: false
    };

    var sauron = {
        hp: 200,
        ap: 20,
        ca: 25,
        pchar: false,
        isEnemy: false, 
        isDead: false
    };

    $("#fHealth").html(frodo.hp)
    $("#sHealth").html(samwise.hp)
    $("#gHealth").html(gollum.hp)
    $("#snHealth").html(sauron.hp)

    $(".char").on("click", function () {
        if (playerSelected === false) {
            playerSelected = true;
            $(".char").css("background-color", "red");
            $(this).css("background-color", "green");
            if (this.id === "frodo") {
                frodo.pchar = true;
                attacker = frodo;
                $("#fHealth").addClass("chosen-player");
                $(this).css("top", "320px");
                $(this).css("left", "-100px");
                $("#samwise").css("top", "320px");
                $("#samwise").css("left", "240px");
                $("#gollum").css("top", "320px");
                $("#gollum").css("left", "240px");
                $("#sauron").css("top", "320px");
                $("#sauron").css("left", "240px");
            } else if (this.id === "samwise") {
                samwise.pchar = true;
                attacker = samwise;
                $("#sHealth").addClass("chosen-player")
                $(this).css("top", "290px");
                $(this).css("left", "-300px");
                $("#frodo").css("top", "320px");
                $("#frodo").css("left", "420px");
                $("#gollum").css("top", "320px");
                $("#gollum").css("left", "240px");
                $("#sauron").css("top", "320px");
                $("#sauron").css("left", "240px");
            } else if (this.id === "gollum") {
                gollum.pchar = true;
                attacker = gollum;
                $("#gHealth").addClass("chosen-player")
                $(this).css("top", "290px");
                $(this).css("left", "-500px");
                $("#frodo").css("top", "320px");
                $("#frodo").css("left", "425px");
                $("#samwise").css("top", "320px");
                $("#samwise").css("left", "425px");
                $("#sauron").css("top", "320px");
                $("#sauron").css("left", "245px");
            } else if (this.id === "sauron") {
                sauron.pchar = true;
                attacker = sauron;
                $("#snHealth").addClass("chosen-player")
                $(this).css("top", "340px");
                $(this).css("left", "-650px");
                $("#frodo").css("top", "320px");
                $("#frodo").css("left", "425px");
                $("#samwise").css("top", "320px");
                $("#samwise").css("left", "425px");
                $("#gollum").css("top", "320px");
                $("#gollum").css("left", "425px");
            }
        }
    })

    $(".char").on("click", function () {
        if (this.id === "frodo" && frodo.pchar === false && combat === false) {
            frodo.isEnemy = true;
            combat = true;
            defender = frodo;
            $("#fHealth").addClass("enemy")
            $("#frodo").css("top", "290px");
            $("#frodo").css("left", "475px");
            if (samwise.pchar === true) {
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "175px");
                    $("#gollum").css("left", "430px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (gollum.pchar === true) {
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "175px");
                    $("#samwise").css("left", "600px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (sauron.pchar === true) {
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "175px");
                    $("#samwise").css("left", "600px");
                }
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "375px");
                    $("#gollum").css("left", "425px");
                }
            }
        } else if (this.id === "samwise" && samwise.pchar === false && combat === false) {
            samwise.isEnemy = true;
            combat = true;
            defender = samwise;
            $("#sHealth").addClass("enemy")
            $("#samwise").css("top", "300px");
            $("#samwise").css("left", "275px");
            if (frodo.pchar === true) {
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "175px");
                    $("#gollum").css("left", "430px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (gollum.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (sauron.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "375px");
                    $("#gollum").css("left", "425px");
                }
            }
        } else if (this.id === "gollum" && gollum.pchar === false && combat === false) {
            gollum.isEnemy = true;
            combat = true;
            defender = gollum;
            $("#gHealth").addClass("enemy")
            $("#gollum").css("top", "300px");
            $("#gollum").css("left", "75px");
            if (frodo.pchar === true) {
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "175px");
                    $("#samwise").css("left", "600px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (samwise.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (sauron.pchar === false) {
                    $("#sauron").css("top", "475px");
                    $("#sauron").css("left", "250px");
                }
            }
            if (sauron.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "425px");
                    $("#samwise").css("left", "600px");
                }
            }
        } else if (this.id === "sauron" && sauron.pchar === false && combat === false) {
            sauron.isEnemy = true;
            combat = true;
            defender = sauron;
            $("#snHealth").addClass("enemy")
            $("#sauron").css("top", "335px");
            $("#sauron").css("left", "-50px");
            if (frodo.pchar === true) {
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "175px");
                    $("#samwise").css("left", "600px");
                }
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "375px");
                    $("#gollum").css("left", "425px");
                }
            }
            if (samwise.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (gollum.pchar === false) {
                    $("#gollum").css("top", "375px");
                    $("#gollum").css("left", "425px");
                }
            }
            if (gollum.pchar === true) {
                if (frodo.pchar === false) {
                    $("#frodo").css("top", "175px");
                    $("#frodo").css("left", "785px");
                }
                if (samwise.pchar === false) {
                    $("#samwise").css("top", "425px");
                    $("#samwise").css("left", "600px");
                }
            }
        }
    });

    $("#button").on("click", function() {
        defender.hp = defender.hp - attacker.ap;
        attacker.ap = attacker.ap * 2
        attacker.hp = attacker.hp - defender.ca
        $(".chosen-player").text(attacker.hp)
        $(".enemy").text(defender.hp)
        if (defender.hp <= 0) {
            $(".enemy").text("DEAD")
            combat = false;
            if (defender === frodo) {
                $("#frodo").css("top", "0px")
                $("#frodo").css("left", "0px")
            } else if (defender === samwise) {
                $("#samwise").css("top", "0px")
                $("#samwise").css("left", "0px")
            } else if (defender === gollum) {
                $("#gollum").css("top", "0px")
                $("#gollum").css("left", "0px")
            } else if (defender === sauron) {
                $("#sauron").css("top", "0px")
                $("#sauron").css("left", "0px")
            }
        }
        if (attacker.hp <= 0) {
            $(".chosen-player").text("DEAD")
        }
    })
});