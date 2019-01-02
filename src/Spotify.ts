import SpotifyWebApi from "spotify-web-api-js";

interface ResultI { access_token: string, token_type: string, expires_in: string, state?: string };
interface AuthorizeI {
    client_id: string,
    response_type: string,
    redirect_uri: string,
    state?: string,
    scope?: string[],
    show_dialog?: boolean
};




export class DigizedSpotify extends SpotifyWebApi {
    track: SpotifyApi.CurrentlyPlayingResponse;
    onplay = () => { };
    constructor() {
        super();
    }
    async authorize({ client_id, response_type, redirect_uri, state, scope, show_dialog }: AuthorizeI): Promise<ResultI> {
        if (!window.location.hash) {
            let url = "https://accounts.spotify.com/authorize";
            url += `?client_id=${client_id}`
            url += `&response_type=${response_type}`
            url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`
            if (state) url += `&state=${state}`
            if (scope) url += `&scope=${scope.join(' ')}`
            if (show_dialog) url += `&show_dialog=${show_dialog}`
            window.location.replace(url);
        }

        const params = window.location.hash;
        const res = {};
        params.split("&").map((param, i) => {
            let [key, value] = param.split("=");
            if (i === 0) key = key.slice(1); // remove the '#' 
            res[key] = value;
        });

        if (res['error']) return Promise.reject(res);
        this.setAccessToken((res as ResultI).access_token);
        this.track = (await this.getMyCurrentPlayingTrack());
        return Promise.resolve(res as ResultI);
    }





    async getInfo() {
        const info = (await this.getAudioAnalysisForTrack(this.track.item.id));
        return info;
    }
};