import { SVG_NS } from "../settings";

class Names {
    constructor(name, x, y, size) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg) {
        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
        text.setAttributeNS(null, 'font-size', this.size);
        text.setAttributeNS(null, 'fill', 'white');
        text.textContent = prompt("What is your name?");
        svg.appendChild(text);
    }

}