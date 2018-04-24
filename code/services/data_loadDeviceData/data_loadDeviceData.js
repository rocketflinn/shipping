//Note: globals contains default settings
function data_loadDeviceData(req, resp){
    ClearBlade.init({request:req});
    
    var query = ClearBlade.Query({ collectionName: DEVICES });
    
    log (req.params);
    //req.params.shipment = "Cannes to Toyko" ;
    var shipment = "all" ;
    if ( req.params.shipment) {
        shipment = req.params.shipment ;
        query.equalTo("shipment", shipment);
    } else {
        resp.success ("{}") ;  // for now, if you don't give a shipment, then return empty
    }

	query.ascending("id");
	
    query.fetch(function(err, data) {
        if(err)
            resp.error(data);
        else {
            log(data);
            resp.success(data);
        }
    });
}