const GiveMeFirstNumber = require('./GiveMeFirstNumber') //Импортируем функцию


test('25', () => {
    expect(GiveMeFirstNumber(25)).toBe(2) //Даём функции значение 25, ожидаем получить 5
})

test('5744', () => {
    expect(GiveMeFirstNumber(5744)).toBe(5)
})


test('102', () => {
    expect(GiveMeFirstNumber(102)).toBe(1)
})

