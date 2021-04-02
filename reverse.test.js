const reverseString = require('./reverse')

test('return olleh', () => {
    expect(reverseString('hello')).toBe('olleh')
})