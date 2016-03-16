var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action){
  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
