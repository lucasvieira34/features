$(document).ready(function () {
    $(".button").on("click", function () {

        $.LoadingOverlay("show", {
            background  : "rgba(165, 190, 100, 0.5)"
        });

        // Hide it after 3 seconds
        setTimeout(function () {
            $.LoadingOverlay("hide");
        }, 3000);
    });
});


$(document).ready(function () {
    $(".espaco").on("click", function () {

        $(".loading").LoadingOverlay("show", {
            background  : "rgba(165, 190, 100, 0.5)"
        });

        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});


$(document).ready(function () {
    $(".personalizado").on("click", function () {

        // Text
        $(".loading").LoadingOverlay("show", {
            progress    : true,
            imageColor: "#DC4B2C",
            text: "Salvando...",
            background  : "rgba(165, 190, 100, 0.5)"
        });
        setTimeout(function () {
            $(".loading").LoadingOverlay("hide");
        }, 3000);

    });
});