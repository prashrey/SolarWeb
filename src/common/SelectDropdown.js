import React from 'react';

export default class SelectDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '',
            displayDropdown: false
        }
    }
    openDropdown = (e) => {
        this.setState({ selectedValue: e.target.value, displayDropdown: true })
    }
    setDropdownValue = (e) => {
        this.props.returnCallback(e.target.textContent);
        this.setState({ selectedValue: e.target.textContent, displayDropdown: false })   
    }
    render() {
        return (
            <div className="dropdown">
                <input
                    className="input"
                    type="text"
                    placeholder="Pick a shade"
                    value={this.state.selectedValue}
                    onChange={this.openDropdown}
                    onFocus={this.openDropdown}
                />
                {this.state.displayDropdown &&
                    <div className="suggest-container">
                        <ul>
                            {this.props.suggestionList.map((suggestion, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="suggestion"
                                        onClick={this.setDropdownValue}
                                    >
                                        {suggestion}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        );
    }
}