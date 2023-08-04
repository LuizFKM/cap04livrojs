$(document).ready(function() {

    $('form').on('reset', () => {
        $('h3').text('')
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();

        const nome = $('#inNome').val()
        const altura = Number($('#inAltura').val())
        const sexo = $('input[name="sexo"]:checked').val();
            
        
        let peso
        if (sexo === "masculino") {
            peso = 22 * Math.pow(altura, 2)
        } else {
            peso = 21 * Math.pow(altura, 2)
        }

    $('h3').text(`${nome}, seu peso ideal é ${peso.toFixed(2)} kg`).css("color", "white").show()
    

})
})