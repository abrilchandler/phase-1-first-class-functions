

 const returnsAnAnonymousFunction = () => { // no arguments
    return () => {                         // return a function with no name
        console.log('an anonymous function is being returned')
    }
}

const returnsANamedFunction = () => { // takes no arguments, nothing in the yellow parentheses
    return function namedFunction() { // return a function from the main function
     console.log('returning a named function')
    }
 }

 const receivesAFunction = (thisIsAFunction) => { 
    thisIsAFunction() 
}