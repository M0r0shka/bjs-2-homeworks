function parseCount(value) {
    let parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (err) {
        return err;
    }
}


class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA,
            this.sideB = sideB,
            this.sideC = sideC

        if ((sideA + sideB) < sideC ||
            (sideB + sideC) < sideA ||
            (sideA + sideC < sideB)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC)
    }

    getArea() {
        let p = 0.5 * this.getPerimeter();
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
                return ('Ошибка! Треугольник не существует')
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }

}
