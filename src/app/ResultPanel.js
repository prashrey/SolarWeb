import React from 'react';
import AlbumCard from '../common/AlbumCard';

export default class ResultsPanel extends React.Component {
    componentDidMount() {
        //dummy code
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <section className="results-panel">
                <AlbumCard results={this.props.arrAlbum.album} />
            </section>
        );
    }
}