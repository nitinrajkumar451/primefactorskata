function primeFactors(n){
    if(Number.isInteger(n) && n>=1)
    {
    var factors= [];
    var divisor = 2;
     while (n>1)
        {
            while(n%divisor==0)
            {
            factors.push(divisor);
            n=n/divisor;        
            }
            divisor++;
        }   
        return factors;
        
    } 
    else
        return "Input must be a finite integer greater than or equal to 1";           
}
   module.exports = primeFactors