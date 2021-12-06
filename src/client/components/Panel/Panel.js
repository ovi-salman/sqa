import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    handleClick = (buttonName) => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-panel">
                <div>
                  h1
                </div>
                <div>
                    
                </div>
                <div>
                   
                </div>
                <div>
                    
                </div>
                <div>
                   
                </div>
            </div>
        );
    }
}



export default Panel;