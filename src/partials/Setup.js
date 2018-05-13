// import { SVG_NS } from "../settings";

// export default class Name {
//     constructor(x, y, size) {

//         // this.name = name;
//         //this.element = element
//         this.x = x;
//         this.y = y;
//         this.size = size;


//     }
//     playername() {
//         prompt("What is your name?");
//     }

//     render(svg, playername) {
//         let text = document.createElementNS(SVG_NS, 'text');
//         text.setAttributeNS(null, 'x', this.x);
//         text.setAttributeNS(null, 'y', this.y);
//         text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
//         text.setAttributeNS(null, 'font-size', this.size);
//         text.setAttributeNS(null, 'fill', 'white');
//         text.textContent = playername;
//         svg.appendChild(text);
//     }

// }