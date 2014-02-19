var $ = require('lib/jquery-2.0.3');
var buttons = require('lib/buttons');

exports.init = function() {

  $(document).ready(function() {
    var deployments = ['mauwa','koral','selaling'];
    var drop_down = $(document.createElement('select'))
                    .attr('id', 'deployments');
    var label = $(document.createElement('label'));

    // create a drop-down for selecting a deployment
    var option, deployment;
    for (var i = 0; i < deployments.length; i++) {
      option = $(document.createElement('option')).attr('value', deployments[i]);
      deployment = $(document.createTextNode(deployments[i]));
      option.append(deployment);
      drop_down.append(option);
    };
    $('#left-container').append(label, drop_down);

    // Add button options when a deployment gets selected
    $('#deployments').change( function() {
      deployment = $('#deployments').val();

      // if buttons already exists, reload them
      if ($('#freq').length) {
        buttons.reload(deployment);
      }
      else {
        buttons.add(deployment);
      }
    });
  });
}