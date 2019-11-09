import React from 'react';
import SelectDropdown from '../common/SelectDropdown';
import Button from '../common/Button';

const userOptions = [
    'White',
    'Violet',
    'Indigo',
    'Blue',
    'Green',
    'Yellow',
    'Orange',
    'Red',
    'Black',
];

export default class SearchWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSelected: false,
        }
    }
    updateSelectedValue = (e) => {
        this.props.updateSearchTitle(e.target.value)
    }
    hideWidget = () => {
        this.setState({ inputSelected: true })
    }
    render() {
        return (
            <section className={"row search-widget " + (this.state.inputSelected ? "d-none" : "")}>
                <div className="col-md-7 category-wrapper">
                    <div className="category">
                        <i className="fas fa-music"></i>
                        <div className="highlighter-div"></div>
                    </div>
                    <label className="category-label col-xs-12">Album <br />Finder</label>
                </div>
                <div className="col-md-5 input-wrapper">
                    <input type="text" onChange={this.updateSelectedValue.bind(this)} placeholder="Enter title of an album" />
                    <Button class="button button-primary" clickEvent={this.hideWidget} disabled={false}>Find me an Album </Button>
                </div>
            </section >
        );
    }
}