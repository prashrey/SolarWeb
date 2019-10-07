import React from 'react';
import SelectDropdown from '../common/SelectDropdown';

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
            categorySelected: '',
            inputSelected: ''
        }
    }
    updateSelectedValue = (selectedValue) => {
        this.setState({ inputSelected: selectedValue })
    }
    setCategoryType = (e) => {
        this.setState({ categorySelected: e.currentTarget.dataset.type })
    }
    render() {
        return (
            <section className="search-widget">
                <div className="category-wrapper">
                    <CategoryIcon label={"Album"} iconClass={"fas fa-music"} click={this.setCategoryType} />
                    <CategoryIcon label={"Artist"} iconClass={"fas fa-user-friends"} click={this.setCategoryType} />
                    <CategoryIcon label={"Track"} iconClass={"fas fa-compact-disc"} click={this.setCategoryType} />
                </div>
                <div className="input-wrapper">
                    <SelectDropdown suggestionList={userOptions} returnCallback={this.updateSelectedValue} />
                </div>
            </section>
        );
    }
}

function CategoryIcon(props) {
    return (
        <div className="category" data-type={props.label} onClick={props.click}>
            <i className={props.iconClass}></i>
            <label>{props.label}</label>
        </div>
    );
}