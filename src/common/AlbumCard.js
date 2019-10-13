import React from 'react';

export default function AlbumCard(props) {
    return (
        <div className="album-grid">
            {props.results.map((album, i) => {
                return (
                    <div key={i} className="album-card">
                        {album.name}
                    </div>
                )
            })}
        </div>
    );
}