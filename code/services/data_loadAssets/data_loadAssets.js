function data_loadAssets(req, resp){

    ClearBlade.init({request:req});
    var query = ClearBlade.Query({ collectionName: "parcels" });
    
    if (req.params.container_id) {
        query.matches("container_id", req.params.container_id) ;
    } else {
        query.matches("container_id", "container-1003");
    }
    query.ascending("parcel_id") ;
    query.fetch(function(err, data) {
        if(err)
            resp.error(data);
        else
            resp.success(data);
    });
}