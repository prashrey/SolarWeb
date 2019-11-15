import React from 'react';
import AlbumCard from '../common/AlbumCard';

export default class ResultsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: ''
        }
    }
    URLStringify = (keyword) => {
        keyword = keyword.trim().replace(" ", "+");
        return keyword;
    }
    componentWillReceiveProps(newProps) {
        let urlString = "http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + this.URLStringify(newProps.title) + "&api_key=403bec2396b250dd857980698d2070b8&format=json";

        fetch(urlString)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.results) {
                        this.setState({
                            isLoaded: true,
                            items: result.results.albummatches.album
                        });
                    }
                    else {
                        this.setState({
                            isLoaded: true,
                            error: "Empty string"
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }
            )
    }
    render() {
        return (
            <section className="results-panel">
                <AlbumCard results={this.state.items} />
            </section>
        );
    }
}