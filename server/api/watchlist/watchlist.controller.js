/**
 * Created by xwang17 on 11/24/14.
 */

var https = require('https');

exports.index = function(req, res) {
    return res.json(200, {'data': 'hello'});
};

exports.addItem = function(req, res) {

    console.log("itemId " + req.query.itemId);

    var body = '<?xml version="1.0" encoding="utf-8"?>'+
        '<AddToWatchListRequest xmlns="urn:ebay:apis:eBLBaseComponents">'+
        '<RequesterCredentials>' +
        '<eBayAuthToken>AgAAAA**AQAAAA**aAAAAA**QNlvVA**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6AFmIGjAZaEqQidj6x9nY+seQ**mpUCAA**AAMAAA**fkU1nCu25N1gntrxXEP6Uvk5m3LHNqCQ8jo5+wL17DSBgD/qS+ZMWNl6DD4StPOTsuCE8CMGr0Ib/gNuBcL/EflC3UEGmN1tScIt0rr/l6QvMKpEYNUQMmh0IlKMzpTweyeUaaIoCL0DzKwvq3nDHHGUYbJHbMElFj2uS3qi6d4pZdOTDM1ZT6uAcAfqPDiDiwU5GEAsCKnX/ZGnOot44EwLWk/p1nAAM0SU/bwCCg4eXVEAKj/15mfoctIJ1pXsLE/N5JWaINsvEZQJ+saEWSJ3j7hIssUQOfZTHtQdMAblGufGIJHAuA8KJjnB5St7IvhsDdWP51YNAfUp1II5Y3bFEsT8SXMf4Dp7Ow3XcXZeJ7GzzCI6hblUeCnIR9ebtAMXvy0lUd3W5T4Ncw7m8Hy+ToFB/J4/g8WJz+f6rU4XmatmKlZug2RwVIkTcbIvBjDLZXEOzjlSDq2avF4atAnm/TbXJ/m39sn3fwkgUDfIr/lgD9HZQGaTUQ2s8Y6iDjZs11Foa50JpkwA6Sbkn2/weEsyoYqf4DP5B/gKlF3NaaxcrvjYvD0SQsY1IHrSNXL+VjDK5A5LVWWtnsSwcejKAEDV7FKY/lpjsbHyIKKRu1ZMtWjEt545Trh/sBmlGj71MInqbiEnYjHvYbuiy6ToPvYlXVb3kQIqnsy6c4M8mVeTXlkKtM3ZPxZDPnw7NC/MqYBk2MS5qxCpjwXiCyCppBLkkB2VHagkfy4ddXWi/XUnfVN8FZ90XoQeL+3a</eBayAuthToken>' +
        '</RequesterCredentials>' +
        '<WarningLevel>High</WarningLevel>' +
        '<ItemID>'+req.query.itemId+'</ItemID>'+
        '</AddToWatchListRequest>';

    var postRequest = {
        host: "api.ebay.com",
        path: "/ws/api.dll?callname=AddToWatchList&siteid=0&appid=eBayIncdb-ca74-45c5-8a30-3b53325965b&version=786&Routing=new",
        port: 443,
        method: "POST",
        headers: {
            "Content-Type": "text/xml",
            "X-EBAY-API-COMPATIBILITY-LEVEL": "786",
            "X-EBAY-API-DEV-NAME": "71038124-21b5-4f76-9d7a-474e972e93f6",
            "X-EBAY-API-APP-NAME": "eBayIncdb-ca74-45c5-8a30-3b53325965b",
            "X-EBAY-API-CERT-NAME": "ece14517-8741-4f41-8ab5-8c8f40ec8585",
            "X-EBAY-API-CALL-NAME": "AddToWatchList",
            "X-EBAY-API-SITEID": "0"
        }
    };

    var buffer = "";
    console.log(postRequest);

    var request = https.request( postRequest, function( response )    {

        console.log( "status: " + response.statusCode );
        var buffer = "";
        res.on( "data", function( data ) { buffer = buffer + data; } );
        res.on( "end", function( data ) { console.log( 'buffer ' + buffer ); } );

    });

    request.write( body );
    request.end();

    return res.json(200, {'ack': "succeed"});
};
