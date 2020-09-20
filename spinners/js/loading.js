// BOTÃO TELA CHEIA
$(document).ready(function () {
    $(".button").on("click", function () {

        $.LoadingOverlay("show", {
            background  : "rgba(165, 190, 100, 0.5)",
            imageColor: "#FA8021",
        });

        // Hide it after 3 seconds
        setTimeout(function () {
            $.LoadingOverlay("hide");
        }, 3000);
    });
});

// CONTAINER
$(document).ready(function () {
    $(".texto").on("click", function () {

        $(".loading").LoadingOverlay("show", {
            imageColor: "#FA8021",
            text        : "Processando...",
            background  : "rgba(165, 190, 100, 0.5)"
        });
        setTimeout(function(){
            $(".loading").LoadingOverlay("text", "Aguarde...");
        }, 3000);
        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 6000);

    });
});

// TEXTO
$(document).ready(function () {
    $(".espaco").on("click", function () {

        $(".loading").LoadingOverlay("show", {
            imageColor: "#FA8021",
            background  : "rgba(165, 190, 100, 0.5)"
        });

        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});

// PERSONALIZADO
$(document).ready(function () {
    $(".personalizado").on("click", function () {

        // Text
        $(".loading").LoadingOverlay("show", {
            progress    : true,
            imageColor: "#FA8021",
            text: "Processando...",
            background  : "rgba(165, 190, 100, 0.5)"
        });
        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});

// PROGRESSO
$(document).ready(function () {
    $(".progresso").on("click", function () {

        $(".loading").LoadingOverlay("show", {
            image       : "",
            progress    : true,
            progressColor : "#FA8021",
            imageColor: "#FA8021",
        });
        var count     = 0;
        var interval  = setInterval(function(){
            if (count >= 100) {
                clearInterval(interval);
                $.LoadingOverlay("hide");
                return;
            }
            count += 10;
            $(".loading").LoadingOverlay("progress", count);
        }, 300);
        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});

// CUSTOMIZADO
$(document).ready(function () {
    $(".customizado").on("click", function () {

        var customElement = $("<div>", {
            "css"   : {
                "font-size"     : "40px",
                "text-align"    : "center",
                "margin-top"    : "5px",
            },
            "text"  : "Processando..."
        });

        $(".loading").LoadingOverlay("show", {
            progress    : true,
            imageColor: "#FA8021",
            progressColor : "#FA8021",
            custom      : customElement
        });
        var count     = 0;
        var interval  = setInterval(function(){
            if (count >= 100) {
                clearInterval(interval);
                $.LoadingOverlay("hide");
                return;
            }
            count += 10;
            $(".loading").LoadingOverlay("progress", count);
        }, 300);
        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});