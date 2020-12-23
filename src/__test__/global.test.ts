const text = "Hola Mundo";
const fruits = ['apple', 'orange', 'pineapple']

// Strings
test('El texto debe contener la plabra "Mundo"', () => {
  expect(text).toMatch(/Mundo/);
});

// Arrays
test('El array debe contener el elemento "apple"', () => {
  expect(fruits).toContain('apple');
});

// Numbers
test('Pruebas de números', () => {
  expect(10).toBeGreaterThan(9);
  expect(8).toEqual(8);
});

// Boolean
test('Pruebas de booleanos', () => {
  expect(true).toBeTruthy();
});

// Callbacks
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
}

test('Pruebas de callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH')
  });
});

// Promises
const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'))
    }

    setTimeout(() => {
      resolve(str.split("").reverse().join(""))
    }, 1000);
  })
} 

test('Pruebas de promesas', () => {
  return reverseString2('Hola')
    .then((str) => expect(str).toBe('aloH'))
})

// Async Await
test('Probar async await', async () => {
  const result = await reverseString2('Hola');
  expect(result).toBe('aloH');
})

// afterEach( () => {
//   console.log('Después de cada prueba')
// })

// afterAll( () => {
//   console.log('Después de todas las pruebas')
// })

// beforeEach( () => {
//   console.log('Antes de cada prueba')
// })

// beforeAll( () => {
//   console.log('Antes de todas las pruebas')
// })