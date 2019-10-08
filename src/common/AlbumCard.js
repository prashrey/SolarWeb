import React from 'react';

export default function AlbumCard(props) {
    return (
        <div className="album-grid">
            <ul>
                {props.results.map((album, i) => {
                    return (
                        <li key={i}>
                            {album.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}