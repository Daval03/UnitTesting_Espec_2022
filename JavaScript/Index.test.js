//LLamamos a nuestras funciones para testearlas
const TestFunction = require('./Index');


const mockFunction = jest.fn(x => x); 

//Matchers
describe("Matchers test", () => {
  test("Matchers operators", () => {
    expect(null).toBeNull()
    expect(TestFunction.numeroPar()).toBeTruthy()
    expect(TestFunction.Fibonacci(8,mockFunction)).toBeLessThan(35)
    expect(TestFunction.Fibonacci(8,mockFunction)).toBeLessThanOrEqual(34)
  })
});


//Setup and Teardown
describe("Setup and Teardown tests", () => {
  var Test1 = 8
  beforeAll(() => {
   console.log("beforeAll llamado");
  });
  afterAll(() => {
   console.log("afterAll llamado");
  });
  beforeEach(() => {
   console.log("beforeEach llamado");
   Test1 = 6
 });
  afterEach(() => {
   console.log("afterEach llamado");
 });
 test("La secuencia Fibonacci de 6 deberia de regresar 13", () => {
   expect(TestFunction.Fibonacci(Test1,mockFunction)).toBe(13);
 });
})


//Mock Functions
describe("Mock Functions test", () => {
  test("Pruebas mock", () => {
    const mockCallback = jest.fn(x =>34+x);
    TestFunction.forEach([0, 1], mockCallback);
    //LLamamos la funcion mock dos veces
    expect(mockCallback.mock.calls.length).toBe(2);
    //El argumento de la primera llamada fue 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    //El argumento de la primera llamada fue 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    //El valor de regreso de la primera llamada es 34
    expect(mockCallback.mock.results[0].value).toBe(34);
  });
});

//Jest Object Test
describe("RetryTimes número par o impar", () => {
  jest.retryTimes(5); // Prueba 5 veces la funcion en busqueda de que pase minimo una vez.
  test('Intenta obtener un numero par 5 intentos de ejecutar la funcion numeroPar', () => {
  expect(TestFunction.numeroPar()).toBe('True');
  });
});

describe("SpyON y mockRestore test", () => {
  test("Pruebas con jest.spyOn", () => {
      const spy = jest.spyOn(TestFunction,"Fibonacci");
      const Test2 = TestFunction.Fibonacci(5, mockFunction);
      // La funcion Fibonacci fue llamada
      expect(spy).toHaveBeenCalled(); 
      //El valor regresado por la primera llamada de la funcion Fibonacci debe de ser 8
      expect(Test2).toBe(8); 
      //Restaura el estado del mock creado por el spy.
      spy.mockRestore(); 
  });
});
