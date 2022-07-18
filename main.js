
function renderJson() {
    console.log($('#json-input').html())
    try {
      var input = eval('(' + $('#json-input').html() + ')');
    }
    catch (error) {
      return alert("Cannot eval JSON: " + error);
    }
    var options = {
      collapsed: $('#collapsed').is(':checked'),
      rootCollapsable: $('#root-collapsable').is(':checked'),
      withQuotes: $('#with-quotes').is(':checked'),
      withLinks: $('#with-links').is(':checked')
    };
    $('#json-renderer').jsonViewer(input, options);
}

$('#btn-json-viewer').click(renderJson);