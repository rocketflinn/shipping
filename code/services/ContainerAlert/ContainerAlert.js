function ContainerAlert(req, resp){
    
    var alert = {
        "id": "container-1003",
        "shipment": "London to Cannes",
        "areaname": "Container-1003",
        "color": "#7698D3"
    }

    ClearBlade.init(req);
                    
    var msg = ClearBlade.Messaging();
    msg.publish("alert/Container", JSON.stringify(alert));

    resp.success (alert) ;
}