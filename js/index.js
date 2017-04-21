$(document).ready(function() {

var string = '';

// Appeneds number to the screen
  $('span').on('click', function() {
    console.log(event.target);
    if ($(event.target).html() === 'C') {
      screen.empty();
      string = '';
    } else if ($(event.target).html() === '=') {
      if (string.indexOf('/') === 0) {
        screen.empty();
        screen.append('ERROR');
      } else if (string.indexOf('*') === 0) {
        screen.empty();
        screen.append('ERROR');
      }  else if (eval(string) === Infinity){
          screen.empty();
          screen.append('ERROR');
      } else {
        screen.empty();
        screen.append(eval(string));
        string = eval(string);
      }
    } else if ($(event.target).html() === 'x') {
      string += '*';
      screen.append($(event.target).html());
    } else if ($(event.target).html() === '\u00F7') {
      string += '/';
      screen.append($(event.target).html());
    } else {
      screen.append($(event.target).html());
      string += $(event.target).html();
      console.log(string);
    }

  });
  var screen = $('#screen');

// Error message


//

// Clear



});
