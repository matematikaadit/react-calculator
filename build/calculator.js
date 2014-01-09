/**
 * @jsx React.DOM
 */
var Calculator = React.createClass({displayName: 'Calculator',
  getInitialState: function() {
    return {caller_id: '', a: 0, b: 0 };
  },
  handleChange: function(event) {
    var a = this.state.a;
    var b = this.state.b;
    var newValue = event.target.value;
    var caller_id = event.target.id;
    if (caller_id == "input_1") {
      a = newValue;
    } else {
      b = newValue;
    }

    this.setState({caller_id: caller_id, a: a, b: b});
  },
  render: function() {
    var a = parseInt(this.state.a);
    var b = parseInt(this.state.b);
    var sum = a+b;
    if (isNaN(sum)) { sum = "N/A"; }
    return (
      React.DOM.div( {className:"calculator"}, 
          React.DOM.input( {type:"text", id:"input_1",
            onChange:this.handleChange, 
            value:this.state.a} ), " + " ,
          React.DOM.input( {type:"text",
            id:"input_2", onChange:this.handleChange,
            value:this.state.b} ), " = ",  sum 
      )
    );
  },
});
  
React.renderComponent(
Calculator(null ),
document.getElementById('content')
);
