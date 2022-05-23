function parseCount(value) {
    let parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    let parsed;
    try {
        parsed = parseCount(value);
    } catch (err) {
        return err;
    }
    if (typeof parsed == 'number') {
        return parsed;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA,
            this.sideB = sideB,
            this.sideC = sideC

        if ((this.sideA + this.sideB) < this.sideC ||
            (this.sideB + this.sideC) < this.sideA ||
            (this.sideA + this.sideC < this.sideB)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimetr() {
        return (this.sideA + this.sideB + this.sideC)
    }

    getArea() {
        let p = 0.5 * (this.sideA + this.sideB + this.sideC)
        let s = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return Number(s.toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    }
    catch (err) {
        return {
            getArea() {
                return ('Ошибка! Треугольник не существует.')
            },
            getPerimetr() {
                return 'Ошибка! Треугольник не существует.'
            }
        }
    }

}

