import React from 'react';
import SelectDropdown from '../common/SelectDropdown';
import Button from '../common/Button';

const userOptions = [
    'Red',
    'Green',
    'Blue',
    'Orange',
    'Yellow',
    'Black',
    'White',
];

export default class SearchWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSelected: ''
        }
    }
    updateSelectedValue = (selectedValue) => {
        this.setState({ inputSelected: selectedValue })
    }
    render() {
        return (
            <section className="row search-widget">
                <div className="col-md-7 category-wrapper">
                    <div className="category">
                        <i className="fas fa-music"></i>
                        <div className="highlighter-div"></div>
                    </div>
                    <label className="category-label col-xs-12">Album <br />Finder</label>
                </div>
                <div className="col-md-5 input-wrapper">
                    <SelectDropdown suggestionList={userOptions} returnCallback={this.updateSelectedValue} />
                    <Button class="button button-primary" clickEvent={null} disabled={false}>Find me an Album </Button>
                </div>
            </section >
        );
    }
}