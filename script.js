$(document).ready(function(){
    console.info("Site criado por Mário Gustavo");
    let contadorDeErros = 0;
    let contadorDeAcertos = 0;

    $(".erro").click(function(){
        contadorDeErros += 1;
        $(this).css("background", "#d12626");
    })
    
    $(".acerto").click(function(){
        contadorDeAcertos += 1;
        $(this).css("background", "#0c961c");
    })
    
    $("#q1").click(function(){
        $("#q2").css("display", "block");
    })
    $("#q2").click(function(){
        $("#q3").css("display", "block");
    })
    $("#q3").click(function(){
        $("#q4").css("display", "block");
    })
    $("#q4").click(function(){
        $("#q5").css("display", "block");
    })
    $("#q5").click(function(){
        $("#q6").css("display", "block");
    })
    $("#q6").click(function(){
        $("#q7").css("display", "block");
    })
    $("#q7").click(function(){
        $("#q8").css("display", "block");
    })
    $("#q8").click(function(){
        $("#q9").css("display", "block");
    })
    $("#q9").click(function(){
        $("#q10").css("display", "block");
    })
    $("#q10").click(function(){
        $("#q11").css("display", "block");
    })
    $("#q11").click(function(){
        $("#q12").css("display", "block");
    })
    $("#q12").click(function(){
        $("#mensagem").text(`Você terminou o jogo com ${contadorDeAcertos} acertos e ${contadorDeErros} erros!`);
    })
})

