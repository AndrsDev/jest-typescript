import randomString from '../index';

describe('Probar la función randomStrings:', () => {
  
  test('La función devuelve un string.', () => {
    const value = randomString();
    expect(typeof value).toBe('string')
  })

  test('La función no devuelve una ciudad que no existe.', () => {
    const value = randomString();
    expect(value).not.toMatch(/Cordoba/)
  })
  
})