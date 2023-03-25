function receivesAFunction(callback)
{
    return callback();
}

function returnsANamedFunction()
{
    return function namedFunction() 
    {
        return 'Hello';
    };
}

function returnsAnAnonymousFunction()
{
    return function () 
    {
        return 'Hello';
    };
}