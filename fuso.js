$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const horaBrasil = Number($('#inHoraBrasil').val())
        let horaFranca = horaBrasil + 5

        if(horaFranca > 24) {
            horaFranca = horaFranca - 24
        }

        $('h3').text(`A hora na França é ${horaFranca.toFixed(2)}`);
        
    })
})