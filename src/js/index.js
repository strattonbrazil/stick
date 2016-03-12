var canvas = document.getElementById("canvas");
console.log(canvas);

$('#console').terminal(function(command, term) {
    if (command !== '') {
        try {
            command
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: 'Javascript Interpreter',
        name: 'js_demo',
        //height: '100%',
        prompt: 'js> '});
