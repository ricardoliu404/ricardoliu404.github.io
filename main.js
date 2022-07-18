
function renderJson() {
 if ($('#json-input').val().length==0){
    alert("please input json")
    return
 }
    try {
      var input = eval('(' + $('#json-input').val() + ')');
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



// $('#json-input').bind('input propertychange', function(){  
//     // var length = $("#json-input").val().length;
//     // console.log(length);
//     renderJson();
// });  