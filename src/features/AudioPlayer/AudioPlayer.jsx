import React, { Suspense } from 'react';
import { Spotify } from "react-spotify-embed";
import LoadingSpinner from "../Spinner/Spinner";

const SpotifyPlayer = () => {
    return (
        <React.Fragment>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E396LAUGPEdWu?si=f458999bda654b35"/>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E3agI3cn5ZbN2?si=17df5e4bff07425a"/>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E38qgXrp9qlhK?si=e7b82121fee44a15"/>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E34VPvdUjNGFY?si=5c431f134bcc4bb5"/>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E36nZqARMwD4S?si=a7b7b1a2b93247d2"/>
            <Spotify link="https://open.spotify.com/playlist/37i9dQZF1E38HMkcz5QEAM?si=f0a82bb4956d4484"/>
        </React.Fragment>
    )
}

const AudioPlayer = () => {
    return (
        <div className="audio">
            <Suspense fallback={<LoadingSpinner />}>
                <SpotifyPlayer />
            </Suspense>
        </div>
    );
};

export default AudioPlayer;