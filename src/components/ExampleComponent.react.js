import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {select} from 'd3-selection';
import {withFauxDOM} from 'react-faux-dom';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
class ExampleComponent extends Component {
    componentDidMount() {
        const faux = this.props.connectFauxDOM('div', 'id')
        select(faux)
            .append('div')
            .html('Hello world')
        this.props.animateFauxDOM(800)
    }
    render() {
        const {id} = this.props;

        return (
            <div className='renderedD3'>
                {id}
            </div>
        );
    }
}

ExampleComponent.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string
};

export default withFauxDOM(ExampleComponent)