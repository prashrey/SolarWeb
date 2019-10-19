import React from 'react';
// import { url } from 'inspector';

export default function AlbumCard(props) {
    return (
        <div className="album-grid">
            {props.results.map((album, i) => {
                let imageUri = album.image[3]["#text"];
                return (
                    <div key={i} className="album-card" style={{ backgroundImage: "url(" + imageUri + ")" }}>
                        <div className="album-gradient"></div>
                        <div className="album-info">
                            <h5 className="h5 album-artist">{album.artist}</h5>
                            <div className="album-name">{album.name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}