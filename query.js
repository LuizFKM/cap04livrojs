$(document).ready(function() {
    $("form").submit(function(e) {
    e.preventDefault();

    const nome = $("#inNome").val();
    const nota1 = Number($("#inNota1").val());
    const nota2 = Number($("#inNota2").val());

    const media = (nota1 + nota2) / 2;

    $("h3").text(`A média das notas ${media.toFixed(2)}`).show();

    if (media >= 7.0) {
        $("h4").text(`Parabéns ${nome}, você foi aprovado(a)`).css("color", "blue").show();
    } else if (media >= 4) {
        $("h4").text(`Atenção ${nome}, você está em exame`).css("color", "green").show()
    }
    else {
        $("h4").text(`Você foi reprovado(a)`).css("color", "red").show();
    }
    });
});

