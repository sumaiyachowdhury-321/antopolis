$('.btn-plus, .btn-minus').on('click', function(e) {
    let priceValue;
    let price = 40;
    let newTotal;
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
        input[0][isNegative ? 'stepDown' : 'stepUp']();
    }

    if(isNegative){
        priceValue = parseInt($(this).parent('.input-group-prepend').parent('.input-group').children('.quantity').val());
        if(priceValue > 0){
            priceValue -= 1;
        }

        $(this).parent('.input-group-prepend').parent('.input-group').parent('td').parent('tr').children('.total').text(priceValue);

    }else{
        priceValue = parseInt($(this).parent('.input-group-append').parent('.input-group').children('.quantity').val());
        priceValue += 1;
        $(this).parent('.input-group-append').parent('.input-group').parent('td').parent('tr').children('.total').text(priceValue);
    }



});

