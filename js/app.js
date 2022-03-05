var email = "22dbms10"

$(document).ready(function(){
    popup()
    movehere()
    hrefmove()
    intervals()
    gen()
})

function popup() {
    $(".popup-toggle").click(function(){
        $("#popup").show()
        $("body").css("backdrop-filter", "blur(4px)")
        // $("#popup").css("backdrop-filter", "none")
    })

    $("#pop-close").click(function(){
        $("#popup").hide()
        $("body").css("filter", "none")
    })
}

function movehere() {
    $("#tp-here").click(function(){
        $("email-gen-inp").attr("placeholder", "여기!")
    })
}

function hrefmove() {
    $("#hrefbtn").click(function(){
        location.href = "https://youtu.be/dQw4w9WgXcQ"
    })
}

function intervals() {
    setInterval(val_change, 1)
}

function val_change() {
    $("#email-gen-inp").attr("value", $("#email-gen-inp").val())
}

function gen() {
    $("#submit").click(function(){
        if ($(".class-sel option:selected") == "c1") {
            email += "1"
        }

        else if ($(".class-sel option:selected") == "c2") {
            email += "2"
        }

        else if ($(".class-sel option:selected") == "c3") {
            email += "3"
        }

        else if ($(".class-sel option:selected") == "c4") {
            email += "4"
        }

        else if ($(".class-sel option:selected") == "c5") {
            email += "5"
        }

        else if ($(".class-sel option:selected") == "c6") {
            email += "6"
        }

        else if ($(".class-sel option:selected") == "c7") {
            email += "7"
        }

        else if ($(".class-sel option:selected") == "c8") {
            email += "8"
        }

        else if ($(".class-sel option:selected") == "c9") {
            email += "9"
        }

        else {
            alert("잘못된 형식입니다.")
        }

        if ($(".num-sel option:selected") == "n1") {
            email += "01"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n2") {
            email += "02"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n3") {
            email += "03"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n4") {
            email += "04"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n5") {
            email += "05"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n6") {
            email += "06"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n7") {
            email += "07"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n8") {
            email += "08"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n9") {
            email += "09"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n10") {
            email += "10"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n11") {
            email += "11"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n12") {
            email += "12"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n13") {
            email += "13"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n14") {
            email += "14"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n15") {
            email += "15"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n16") {
            email += "16"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n17") {
            email += "17"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n18") {
            email += "18"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n19") {
            email += "19"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n20") {
            email += "20"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n20") {
            email += "19"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n21") {
            email += "21"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n22") {
            email += "22"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n23") {
            email += "23"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "24") {
            email += "24"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n25") {
            email += "26"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n27") {
            email += "27"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n28") {
            email += "28"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n29") {
            email += "29"
            email += "@dge.go.kr"
        }

        else if ($(".num-sel option:selected") == "n30") {
            email += "30"
            email += "@dge.go.kr"
        }

        else {
            alert("잘못된 형식입니다.")
        }

        $("#email-gen-inp").attr("value", email)
    })
}