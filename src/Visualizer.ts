import { DigizedSpotify } from "./Spotify";

interface TimeSigI { start: number, duration: number, confidence: number };
class Rect {
    private style: string;

    constructor(private x: number, private y: number, private width: number, private height: number, color: string) {
        this.style = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(speed) {
        this.y += speed / 30;
    }

    getY() {
        return this.y + this.height;
    }

}
export class Visualizer {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private interval: NodeJS.Timeout;
    private boxes: Rect[] = [];
    private speed: number;
    spotify: DigizedSpotify;
    private timeouts: NodeJS.Timeout[] = [];
    constructor() {

        this.canvas = document.createElement("canvas");
        document.body.append(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        this.spotify = new DigizedSpotify();
        this.spotify.authorize({
            client_id: "611f3dd4bae743bca1dcf8603d53ea32",
            response_type: "token",
            redirect_uri: window.location.href,
            scope: ['user-modify-playback-state']
        });
        window.onresize = () => this.updateBounds();
        this.updateBounds();
        this.update();

    }

    updateBounds() {

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

    }


    update() {
        this._update();
        this.draw();
    }

    private _update() {
        this.boxes.forEach(b => b.update(this.speed));
        if (this.boxes.length > 0 && this.boxes[0].getY() > this.canvas.height) this.boxes.shift();
    }




    draw() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.boxes.forEach(b => b.draw(this.ctx));
    }

    addRect(height: number, width: number, color: string, x?: number) {
        this.boxes.push(
            new Rect((x !== undefined ? x : 1) * (Math.random() * this.canvas.width), 0, width * 10, height * 10, color)
        );
    }

    updateSpeed(speed: number) {
        this.speed = speed;
    }


    async play() {
        const info = (await this.spotify.getInfo());
        this.handleBeat(info.tatums, '#f00');
        this.handleBeat(info.beats, '#00f');
        this.handleBeat(info.bars, '#0f0');
        this.handleSegments(info.segments, '#fff');
        this.handleSections(info.sections);
        this.interval = setInterval(() => this.update(), 1);
    }

    pause() {
        clearInterval(this.interval);
        this.timeouts.forEach(time => clearTimeout(time));
        this.timeouts = [];
        this.boxes = [];
        this.speed = 0;
        this.update();

    }

    toggle() {
        if (this.spotify.track.is_playing) {
            this.spotify.pause();
            this.pause();
        } else {
            this.spotify.seek(0, {});
            this.spotify.play();
            this.play();

        }
        this.spotify.track.is_playing = !this.spotify.track.is_playing;

    }

    handleSections(sections) {
        sections.forEach(section => {
            this.timeouts.push(
                setTimeout(() => {
                    this.speed = section.tempo;
                }, section.start * 1000));
        });
    }

    handleBeat(beats: TimeSigI[], color: string) {
        beats.forEach(beat => {
            this.timeouts.push(
                setTimeout(() => {
                    this.addRect(beat.duration, beat.confidence, color, 0);
                }, beat.start * 1000));
        });
    }

    handleSegments(segments, color: string) {
        segments.forEach(segment => {
            this.timeouts.push(
                setTimeout(() => {
                    segment.pitches.forEach(pitch => {
                        this.addRect(segment.duration, segment.confidence, color);
                    });
                }, segment.start * 1000));
        });
    }
}