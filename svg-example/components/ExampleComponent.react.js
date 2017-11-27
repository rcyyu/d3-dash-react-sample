import React, {Component} from 'react';
import {select} from 'd3-selection';
import ReactFauxDOM from 'react-faux-dom';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
class ExampleComponent extends Component {
    //    componentDidMount() {
    //        const faux = this.props.connectFauxDOM('div', 'id')
    //        select(faux)
    //            .append('div')
    //            .html('Hello world')
    //        this.props.animateFauxDOM(800)
    //    }
    render() {
        var Box = React.createClass({
            getInitialState: function () {
                return {
                    mouseOver: false
                }
            },
            render: function () {
                var self = this
                var svg = select(ReactFauxDOM.createElement('svg'))
                .attr({
                    width: 300,
                    height: 300
                })
                svg
                    .append('rect')
                    .attr({
                    width: 300,
                    height: 300,
                    fill: this.state.mouseOver ? 'red' : 'green'
                })
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
        return (
            <div className='renderedD3'>
            {React.createElement(Box)}
            </div>
        )}
//        const {id} = this.props;
//
//        return (
//            <div className='renderedD3'>
//                {id}
//            </div>
//        );
}


//ExampleComponent.propTypes = {
//    /**
//     * The ID used to identify this compnent in Dash callbacks
//     */
//    id: PropTypes.string
//};

export default ReactFauxDOM.withFauxDOM(ExampleComponent)