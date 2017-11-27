import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {select} from 'd3-selection';
import ReactFauxDOM from 'react-faux-dom';

var Box = React.createClass({
	getInitialState: function () {
		return {
			mouseOver: false
		}
	},
	render: function () {
		var self = this
		var svg = select(ReactFauxDOM.createElement('svg'))
		.attr('width', 300)
		.attr('height', 300)
		svg
		.append('rect')
		.attr('width', 300)
		.attr('height', 300)
		.style('fill', this.state.mouseOver ? 'red' : 'green')
		.on('mouseover', function () {
			self.setState({
				mouseOver: true
			})
		})
		.on('mouseout', function () {
			self.setState({
				mouseOver: false
			})
		})

		return svg.node().toReact()
	}
})

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
class ExampleComponent extends Component {
    render() {
		return (
			<Box></Box>
		)
	}
}

export default ReactFauxDOM.withFauxDOM(ExampleComponent)
