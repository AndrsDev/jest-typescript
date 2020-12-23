const cities = ['Ciudad de México', 'Bototá', 'Lima', 'Buenos Aires', 'Guadalajara'];

const randomString = () => {
  const value = cities[Math.floor(Math.random() * cities.length)];
  return value;
}

const reverseString = (str: string) => {
  return new Promise((resolve, reject) => {
    if(!str) {
      reject(Error('Error'))
    }

    setTimeout(() => {
      resolve(str.split("").reverse().join(""))
    }, 1000);
  })
} 

export default randomString;