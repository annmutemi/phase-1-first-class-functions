function receivesAFunction(bikeRide){
bikeRide()
}

function bikeRide(){
    return "ride my pace bike"
}

function returnsANamedFunction(){
    return function ann () {
        console.log("returning functions")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return ""
    }
}