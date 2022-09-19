const TestFunction = {
    //numeroPar, es una funcion que genera un numero aleatorio entre 0 - 100 
    //y me dicta si este numero es par con un true o false
    numeroPar(){
        i=Math.floor(Math.random() * 100);
        if (i%2===0){
            return "True"
        }return "False"
    },
    Fibonacci(n, llamada){
        let res = []
        let x = 0, xplus = 1, xnext
        for (let i = 1; i <= n; i++) {
          xnext = x + xplus;
          x = xplus;
          xplus = xnext;
        }
        return xplus;
    },forEach(list, callback) {
        for (let i = 0; i < list.length; i++) {
          callback(list[i]);
        }
      }
}
module.exports = TestFunction;

