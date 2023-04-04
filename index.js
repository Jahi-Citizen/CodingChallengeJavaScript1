
/*

    Author: Jahi Citizen 
    Date: 4/4/2023
    Description: JavaScript challenge to find the remainder of two numbers using objects, with error handling for non-integer inputs and division by zero.


*/


class DivisionRemainderCalculation {
     /**
     * Calculates the remainder of a division operation between two integers.
     * 
     * @param {number} num1 - The dividend.
     * @param {number} num2 - The divisor.
     * @returns {number} The remainder of num1 divided by num2.
     * @throws {Error} If num1 or num2 is not an integer, or if num2 is 0.
     */
    calculate(num1, num2)
    {
        try {

            if(!Number.isInteger(num1) || !Number.isInteger(num2))
            {
                throw new Error('Both parameters must be integers');
            }

            if (num2 == 0)
            {
                throw new Error("Cannot divide by zero");
            }
            
            let result = num1 % num2;
            return result; 

        }catch (err) {
        console.error(err);
    
        }     
        
    }
}

try {
    
    console.log(new DivisionRemainderCalculation().calculate(30, 20));
    console.log(new DivisionRemainderCalculation().calculate(10.2, 3.2));
    console.log(new DivisionRemainderCalculation().calculate(40, 0));
} catch(err){
    console.error(err);
}


