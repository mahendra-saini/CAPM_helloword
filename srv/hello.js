module.exports = (helloser) => {
    helloser.on ('hello', req =>  {
            return "Hello " + req.data.msg;
        });
    }
    // 2nd way
    // const exportSRV = function(srv) {
    //     srv.on("somesrv", req => {
    //             return "Hello " + req.data.msg;
    //         });
    //     };
    
    //     module.exports = exportSRV;