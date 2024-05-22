/** @format */

class Range {
    from = 0;
    to = 0
    range = [];

    constructor(from, to) {
        this.from = from;
        this.to = to;

        this.init(from, to);
    }

    init(from, to) {
        if (from > to) {
            throw('Incorrect start range value');
        }

        for (let i = from; i <= to; i++) {
            this.range.push(i);
        }

        // Deleting 2 random values (missingElementsCount)
        for (let i = 0; i < 2; i++) {
            const randomIndex = Math.floor(Math.random() * this.range.length);
            this.range.splice(randomIndex, 1);
        }

        console.log(this.range);
    }

    method_0() {
        const missingNumbers = [];

        if (this.range[0] > this.from) {
            missingNumbers.push(this.range[0] - 1);
        }

        
        for (let i = 1; i < this.range.length; i++) {
            if (this.range[i] - this.range[i - 1] == 2) {
                missingNumbers.push(this.range[i] - 1);
            } else if (this.range[i] - this.range[i - 1] == 3) {
                missingNumbers.push(this.range[i] - 2);
                missingNumbers.push(this.range[i] - 1);
            }
        }

        const lastElement = this.range[this.range.length - 1];
        if (lastElement !== this.to &&  lastElement < this.range[this.range.length - 2] + 2) {
            missingNumbers.push(lastElement + 1);
        }

        return missingNumbers;
    }

    method_1() {
        const totalSum = (this.to * (this.to + 1)) / 2;
        const totalSumSquares = (this.to * (this.to + 1) * (2 * this.to + 1)) / 6;

        const arrSum = this.range.reduce((sum, num) => sum + num, 0);
        const arrSumSquares = this.range.reduce((sum, num) => sum + num * num, 0);

        const sumDiff = totalSum - arrSum;
        const sumSquaresDiff = totalSumSquares - arrSumSquares;
        const sumDiffSquared = sumDiff * sumDiff;

        const xy = (sumDiffSquared - sumSquaresDiff) / 2;

        const discriminant = Math.sqrt(sumDiffSquared - 4 * xy);

        const x = (sumDiff + discriminant) / 2;
        const y = (sumDiff - discriminant) / 2;

        return [x, y].sort((a, b) => a - b);
    }
}
