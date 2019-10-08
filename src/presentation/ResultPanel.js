import React from 'react';
import AlbumCard from '../common/AlbumCard';
import response from '../common/ApiData';

export default class ResultsPanel extends React.Component {
    render() {
        console.log(response.default);
        return (
            <section className="results-panel">
                <AlbumCard results={response.results.albummatches.album} />
            </section>
        );
    }
}