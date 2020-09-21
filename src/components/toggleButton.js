import React from 'react';

class ToggleButton extends React.Component {
    render() {
        return (
        <button className="toggleButton" >
            <img src={(process.env.PUBLIC_URL + "/images/icon.png")} alt="toggle" onClick={this.props.onClick}/>
        </button>
        );
    }
};

export default ToggleButton;
