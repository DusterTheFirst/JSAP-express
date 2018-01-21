export class IndexOutOfRangeError extends Error {
    /** Name of the error */
    name: "IndexOutOfRangeError";
    /** Error message */
    message: string;
    /** Stacktrace */
    stack: string;

    constructor(item: number, min: number, max: number) {
        super(`${item} is not within the range ${min} - ${max}`);
        this.name = "IndexOutOfRangeError";
    }
}