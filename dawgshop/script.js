document.getElementById('go').onclick = function() {
    var inputText = $('#text-input').val();
    var dawgifiedText = inputText + ", bekfast";
    document.getElementById('output').innerHTML = dawgifiedText;
    
};