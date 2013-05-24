$(document).ready(function() {
    var pickerPlaceholder = '#picker .selector';
    var color = '#6C7C8D';
    $(pickerPlaceholder).farbtastic(displayColor);
    $.farbtastic(pickerPlaceholder).setColor(displayColor);
    displayColor(color);

    $('#selectedColor').on('keyup', function(){
        $.farbtastic(pickerPlaceholder).setColor($(this).val());
    })
});

displayColor = function(color) {
    var pl = '.main.container .colorTable';
    masterColor = color;
    colors = ColorsArray(masterColor);
    $('#selectedColor').val(masterColor);
    $(pl).empty()
    for (var i = 0; i < colors.length; i++) {
        presentColors(pl, colors[i] );
    };

}

function Color( o ) {
    return net.brehaut.Color( o );
  }

ColorsArray = function(colour) {
    var col = Color(colour),
        colors = [];

    colors.push( getColorScheme(col, 'complementaryScheme')         );
    colors.push( getColorScheme(col, 'splitComplementaryScheme')    );
    colors.push( getColorScheme(col, 'splitComplementaryCWScheme')  );
    colors.push( getColorScheme(col, 'splitComplementaryCCWScheme') );
    colors.push( getColorScheme(col, 'triadicScheme')               );
    colors.push( getColorScheme(col, 'clashScheme')                 );
    colors.push( getColorScheme(col, 'tetradicScheme')              );
    colors.push( getColorScheme(col, 'fourToneCWScheme')            );
    colors.push( getColorScheme(col, 'fourToneCCWScheme')           );
    colors.push( getColorScheme(col, 'fiveToneAScheme')             );
    colors.push( getColorScheme(col, 'fiveToneBScheme')             );
    colors.push( getColorScheme(col, 'fiveToneCScheme')             );
    colors.push( getColorScheme(col, 'fiveToneDScheme')             );
    colors.push( getColorScheme(col, 'fiveToneEScheme')             );
    colors.push( getColorScheme(col, 'sixToneCWScheme')             );
    colors.push( getColorScheme(col, 'sixToneCCWScheme')            );
    colors.push( getColorScheme(col, 'neutralScheme')               );
    colors.push( getColorScheme(col, 'analogousScheme')             );

    return colors
}

getColorScheme = function(color, name) {
    return {
        title: name,
        color: color,
        colors: Color(color)[name]()
    }
}

htmlColor= function(color){
    /*
    receive a Color, return HTML
     */

    var el = $('<li />', {
        'class': 'color',
        'data-color': color,
        'html': color.toString()

    });

    el.css('background-color', color.toString())

    return el
}
presentColors = function(element, colors){
    additionalColors = [];
    // Basic uls.
    var ul = $('<ul />', {
        id: colors.title,
        'class': 'colors',
        'html': $('<li />', {
            'class': 'title',
            html: colors.title
        })
    });

    ul.data('colors', additionalColors.concat(colors) );

    colorUl = $('<ul />');

    for (var i = 0; i < colors.colors.length; i++) {
        var color = colors.colors[i];
        colorUl.append(htmlColor(color))
    };

    ul.append(colorUl);
    $(element).append(ul)

}