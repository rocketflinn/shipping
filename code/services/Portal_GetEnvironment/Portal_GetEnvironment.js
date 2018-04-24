function Portal_GetEnvironment(req, resp){

    ClearBlade.init({ request: req });

    var getRandomArbitrary= function (min, max) {
        return Math.random() * (max - min) + min;
    }
            
    var env = [] ;

    for (var j=0;  j < 40; j++ ) {

        var hour = {} ;
            
        var today = new Date() ;
        var foo = today.setHours(today.getHours() - j);
        hour.timestamp = today.toString();
        hour.humidity = getRandomArbitrary(10,100) ;
        hour.temperature = getRandomArbitrary(80,85) ;
        hour.luminance =getRandomArbitrary(20,60) ;
        if ( j > 30) {
            hour.vibration = getRandomArbitrary(50,70) ;
        } else {
            hour.vibration = getRandomArbitrary(6,20) ;
        }
        hour.battery = getRandomArbitrary(90,100) ;
        
        env.push(hour);

    } // end of else
    resp.success(env) ;

}

     		
