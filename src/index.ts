import { Visualizer } from "./Visualizer";

const visualizer = new Visualizer();

document.onkeypress = e => {
    if (e.keyCode === 32) {
        visualizer.toggle();
    }
};
