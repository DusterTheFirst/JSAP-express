import { IndexOutOfRangeError } from "./Errors/IndexOutOfRangeError";

export class PreparsedPage {
    /** Length of the file */
    length: number;
    /** Lines of code */
    lines: number;
    /** Length of each line */
    lineLengths: number[];
    /** Raw string pos */
    raw: string;

    constructor(raw: string) {
        this.raw = raw;
        this.length = raw.length;

        let stringlines = raw.split("\n");

        this.lines = stringlines.length;
        this.lineLengths = [];
        for(let line of stringlines) {
            this.lineLengths.push(line.length);
        }
    }

    get2DPos(pos: number): { x: number, y: number } {
        if (pos > this.length)
            throw new IndexOutOfRangeError(pos, 0, this.length);

        let y = 0;
        let x = 0;
        let currentLength;

        for (let distance = 0; distance < pos; distance++) {
            currentLength = this.lineLengths[y];

            x++;

            // console.log(distance, currentLength, x, y, this.raw[distance]);

            if (x > currentLength) {
                x = 0;
                y += 1;
            }
        }

        return {
            x: x + 1,
            y: y + 1
        };
    }
}