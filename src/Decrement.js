import React from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component() {
    constructor(props) {
        super(props);
        this.state = { number: props.start };
    }


    handleDecrement = (state) => {
        this.setState({ number: state.number - 1 });
    };

    render() {
        return (
            <div>
                {this.state.number}{" "}
                <button onClick={() => this.handleDecrement(this.state)}>
                    Decrement the Number
            </button>
            </div>
        );
    }
}

Decrement.propTypes = {
    start: PropTypes.number.isRequired
};

export default Decrement;