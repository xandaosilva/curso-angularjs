// IIFE
(function(){
    console.log("Hello world");
})();

(function(x, y){
    const calc = x + y;
    console.log(calc);
})(10, 11);