function primeFactors(n){
    var factors= [];
    var remainder =n;
    var divisor = 2
    while (n>1)
    {
        while(n%divisor==0)
        {
        factors.push(divisor);
        n=n/divisor;        
        }
        divisor++;
    }
    if(n>1)
    {
    factors.push(n);
    }    
    return factors;
}
   module.exports = primeFactors