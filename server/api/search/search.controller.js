/**
 * Created by xwang17 on 11/24/14.
 */
/**
 * Created by xwang17 on 11/19/14.
 */
var eventsdb=require('../../components/eventsdb');
var utils = require('../../components/pig/utils');
var config = require('../../config/environment');
exports.index = function(req, res) {
    return res.json(200, {'data': 'hello'});
};
exports.sunglass = function(req, res) {

    var searchResult = {
        "count" :   10,
        "items" :   [
            {
                itemId:   "231268073394",
                title:    "Gucci Diamond Medium Rimless Sunglasses with Logo & Signature GG 2851/S 1.20 Ct.",
                price:  "1999.99",
                galleryURL: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/CCwAAOSwVupTqz3M/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/CCwAAOSwVupTqz3M/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/hzsAAOSwGiRTqz3H/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/X08AAOSw8lBTqz3J/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WHAAAOSwq5lTqz3K/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/VIEAAOSwqxdTqz3L/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/CEMAAOSwVupTqz3N/$_1.JPG?set_id=880000500F"
                ]
            },
            {
                "itemId":
                    "281495449075"
                ,
                price:  "1350",
                title: "chrome hearts sunglasses",
                galleryURL: "http://i.ebayimg.com/00/s/MjU4WDUwMA==/z/vIsAAOSwMKpUY5GJ/$_1.JPG?set_id=8800005007",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MjU4WDUwMA==/z/vIsAAOSwMKpUY5GJ/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NjAwWDgwMA==/z/y0EAAOSw2XFUY5GK/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDQ1MA==/z/PfAAAOSw~FNUY5GL/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjIyWDgwMA==/z/540AAOSw1-RUY5GM/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTk5WDkwMA==/z/UIsAAOSwuMFUY5GO/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/Mzg5WDUwMA==/z/308AAOSwIBBUY5GP/$_1.JPG?set_id=8800005007"
                ]

            },{
                itemId:
                    "171423424633"
                ,
                title: "LOUIS VUITTON Sunglasses Aviator Z6269 57-18 Black/Grey Gradient",
                price:  "775",
                galleryURL: "http://i.ebayimg.com/00/s/Nzg1WDE0ODI=/z/Wn0AAMXQuCdTfMg9/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/Nzg1WDE0ODI=/z/Wn0AAMXQuCdTfMg9/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzE1WDE0NjM=/z/~AsAAOxycgVTfMg~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/Nzc2WDE0MzA=/z/UoQAAMXQ3kNTfMg~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTU1WDEwMTY=/z/Wr0AAMXQuCdTfMhA/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTY5WDE1MjA=/z/sVYAAOxyrrpTfMhA/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDAwWDc5NQ==/z/yocAAOSwGHhTfMhA/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDE4WDY0OQ==/z/WsYAAMXQuCdTfMhB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA4MlgxMDkx/z/UrUAAMXQ3kNTfMhC/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTE0OFgxNDMw/z/XTwAAOxyBPZTfMhC/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "291009515505"
                ,
                price:  "649.99",
                title: "*NEW* BVLGARI BV8089K 51933B HAVANA, BROWN GRADIENT LENS *LIMITED EDITION*",
                galleryURL: "http://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/CY8AAMXQoYJSI5yC/$T2eC16FHJFwFFZ5VhhnBBSI5yBkTn!~~60_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/CY8AAMXQoYJSI5yC/$T2eC16FHJFwFFZ5VhhnBBSI5yBkTn!~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/3JUAAOxyod5SI5x5/$T2eC16ZHJGYE9noojdolBSI5)5Q59g~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2N1gxNjAw/z/52wAAOxyl5lSI5yE/$(KGrHqFHJB8FIgy+6Z(DBSI5yE(h(!~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MzY0WDYzMg==/z/32MAAMXQAI9SI52C/$T2eC16FHJGgFFmsJ+BN7BSI52B2d!!~~60_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "291194354483"
                ,
                title: "New Chrome Hearts Sunglasses Women CH Poon II Burgandy BC-BGL 63mm",
                price:  "649",
                galleryURL: "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/2jMAAOSwkNZUc2NO/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/2jMAAOSwkNZUc2NO/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/hi0AAOSwuMFUc2NB/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/450AAOSwj0NUc2NU/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/URYAAOSwnDxUc2Ne/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODMyWDE2MDA=/z/nqUAAOSwQJhUc2NI/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "161485603353"
                ,
                title: "DITA Cascais shiny 18k gold w/ grey to clear - ar DRX-2065-A AUTHORIZED DEALER ",
                price:  "645",
                galleryURL: "http://i.ebayimg.com/00/s/NTU3WDk2MA==/z/Ug8AAOSwQItUF25~/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NTU3WDk2MA==/z/Ug8AAOSwQItUF25~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTYyWDc4Ng==/z/YDsAAOSwVFlUF23q/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTU3WDk2MA==/z/AWsAAOSwnDZUF23r/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/TTUAAOSwq7JUF23s/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDAwWDYwMA==/z/Qi8AAOxyc2pTa4om/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "261630868819"
                ,
                title: "Chopard Sunglasses SCH128/S 700 Black Gold Crystals Designer Eyewear",
                price:  "600",
                galleryURL: "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/69YAAOSwajVUQtx7/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/69YAAOSwajVUQtx7/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/o0MAAOSwR0JUQtyk/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/7GEAAOSwajVUQtyB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/9XQAAOSwU9xUQtyJ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/gBsAAOSw6EhUQtyU/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMFgxNTAw/z/oqgAAOSwR0JUQtyc/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "171539525630"
                ,
                title: "BVLGARI 652B 939/87 BLK/CRYSTAL FLOWERS BULGARI 652 B *EXTREMELY RARE*sunglasses",
                price:  "599.99",
                galleryURL: "http://i.ebayimg.com/00/s/OTM5WDE1NjI=/z/1O8AAOSwYshUYtUg/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/OTM5WDE1NjI=/z/1O8AAOSwYshUYtUg/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/x1QAAOSw2XFUYtSw/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/xjEAAOSw2XFUYtSg/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/mroAAOSw0vBUYtUD/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/SP0AAOSwuMFUYtTr/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/U7gAAOSwKrxUYtT3/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/ztAAAOSwYshUYtTB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjIzWDc1OQ==/z/0JcAAOSwYshUYtTZ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/YzEAAOSwQM9UYtTR/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "201189885605"
                ,
                title: "DAVID YURMAN Signature Cable LAPIS Stone Sunglasses DY092 05SS/LA DY925 HANDMADE",
                price:  "13.99",
                galleryURL: "http://i.ebayimg.com/00/s/OTI5WDE2MDA=/z/u9AAAOSwajVUNtyR/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/OTI5WDE2MDA=/z/u9AAAOSwajVUNtyR/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODcyWDE2MDA=/z/IKwAAOSwR0JUNtyK/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODMzWDE2MDA=/z/gQUAAOSwZkJUTAYe/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIxM1gxNjAw/z/TkUAAOSwdsFUNtxl/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/nYQAAOSw1x1UNtxw/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/uVwAAOSwajVUNtx4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTI3MFgxNjAw/z/UPwAAOSwdsFUNtx-/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjkxWDE2MDA=/z/upQAAOSwajVUNtyE/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "161143487851"
                ,
                title:  "NEW Luxury SPECIAL EDITION BULGARI Swarovski Jewelry Shield BV 6063-B 101/13",
                price:  "520.97",
                galleryURL: "http://i.ebayimg.com/00/s/MzY4WDcyMA==/z/kHYAAOxy4t1SeOIb/$(KGrHqNHJBUFJ)PSNFp9BSeOIbZR1w~~60_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MzY4WDcyMA==/z/kHYAAOxy4t1SeOIb/$(KGrHqNHJBUFJ)PSNFp9BSeOIbZR1w~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA4MFg4ODQ=/z/6yMAAOxyRNJSeOIb/$T2eC16NHJGIFFofh+)BHBSeOIc6Z4Q~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDEzWDUwMA==/z/KLgAAOxyTjNSeNoL/$T2eC16RHJGkFFm6mRNdEBSeNoLD,qw~~60_1.JPG?set_id=8800005007"
                ]
            }
        ]
    };

    return res.json(200, {'searchResult': searchResult});
};
exports.handbag = function(req, res) {

    var searchResult = {
        "count" :   10,
        "items" :   [
            {
                itemId:   "331364538654",
                title:    "NWT Coach Legacy Leather Chelsea Carryall Satchel Handbag 25359 Brass/Robins Egg",
                price:  "278",
                galleryURL: "http://i.ebayimg.com/00/s/MTM5MVgxMjAw/z/Cj4AAOxy-j9SR2iL/$T2eC16R,!y8E9s2fjK+7BSR2iK212g~~60_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTM5MVgxMjAw/z/Cj4AAOxy-j9SR2iL/$T2eC16R,!y8E9s2fjK+7BSR2iK212g~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTM5MVgxMjAw/z/UR8AAOxy2FZSR2iJ/$T2eC16F,!yMFIc7EN-FbBSR2iJVdoQ~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/JXQAAOxyF0pTigNu/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTM5MVgxMjAw/z/OK0AAOxyAs9SR2iJ/$T2eC16J,!)gFIboFbJswBSR2iJI4y!~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTM5MVgxMjAw/z/gUoAAOxygKZSR2iK/$T2eC16h,!)IFIdYDG,UTBSR2iJgsZ!~~60_1.JPG?set_id=880000500F"
                ]
            },
            {
                "itemId":"161479015760",
                price:  "184.36",
                title: "NWT Coach 30128 Madison Small Christie Soapstone Saffiano Leather Satchel ",
                galleryURL: "http://i.ebayimg.com/00/s/MTE1MFgxMTU3/z/m6gAAOSw1XdUX79G/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTE1MFgxMTU3/z/m6gAAOSw1XdUX79G/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTE1MFg4NDI=/z/gtoAAOSwcF9UX79P/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTE1MFg0NzU=/z/gyQAAOSwcF9UX79R/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzEzWDE2MDA=/z/7GMAAOSwrx5UX79T/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTc2WDE2MDA=/z/8boAAOSwyTZUX79V/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId: "291291550659",
                title: "NEW KATE SPADE FLAME ORANGE OSTRICH PRINT MATINE WELLESLEY LEATHER PURSE BAG",
                price: "208.52",
                galleryURL: "http://i.ebayimg.com/00/s/MTAyNFgxMDEx/z/SAkAAOxyVVJR8tB6/$(KGrHqFHJDcFHupdVJevBR8tB6Iof!~~60_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAyNFgxMDEx/z/SAkAAOxyVVJR8tB6/$(KGrHqFHJDcFHupdVJevBR8tB6Iof!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyM1gxMTQ3/z/DbsAAOxyBC1R8tBj/$(KGrHqFHJEwFHiF(FWbpBR8tBi8P4!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODUzWDEyODA=/z/IL4AAOxyPc5R8tBl/$T2eC16ZHJF8FFp9ybdJqBR8tBlE81g~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MzA=/z/npIAAOxyGstR8tBn/$T2eC16J,!y8E9s2fifq4BR8tBm3vCQ~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MjI=/z/sz8AAMXQBlJR8tBo/$(KGrHqF,!qUFHeJ-S3D!BR8tBo3)pw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzMxWDEyODA=/z/OfYAAOxy5QtR8tBr/$(KGrHqV,!p8FHk5YP(VlBR8tBrKJjw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIwWDEyODA=/z/D9cAAOxyBLBR8tBt/$(KGrHqR,!mIFH(6J7wRiBR8tBs03ug~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjY4WDEyODA=/z/OgYAAOxy5QtR8tBv/$(KGrHqF,!rEFHOi!iVcMBR8tBu19cQ~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3MDY=/z/OB8AAMXQgyZR8tBx/$(KGrHqQOKpMFHkh2O)OBBR8tB)E5eQ~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODYwWDEyODA=/z/Q3wAAOxy7S5R8tBz/$T2eC16ZHJIEFHR2tF!(TBR8tBzL2Dw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MjM=/z/OjsAAMXQysxR8tB1/$(KGrHqN,!k8FHQkdcTP-BR8tB1K92w~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzU2WDEyODA=/z/89cAAOxyD9JR8tB4/$(KGrHqYOKo8FHYFHLV(GBR8tB3kJyQ~~60_12.JPG?set_id=880000500F"
                ]
            },{
                itemId: "301406907741",
                title: "NWT KATE SPADE JENNY SOUTHPORT AVENUE LEATHER COLORBLOCK BAG SEEDPEARL YELLOW",
                price: "248.88",
                galleryURL:
                    "http://i.ebayimg.com/00/s/MTAxNlgxMDAw/z/bfgAAOSwuMFUcTx6/$_1.JPG?set_id=880000500F"
                ,
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAxNlgxMDAw/z/bfgAAOSwuMFUcTx6/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTMzM1gxMDAw/z/YkMAAOSwD0lUcTx4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTMzM1gxMDAw/z/5T4AAOSwg3FUcTx5/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTMzM1gxMDAw/z/a6kAAOSw2XFUcTx2/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "301387347680"
                ,
                title: "NEW KATE SPADE ALESSA WELLESLEY SAPPHIRE PINK CROSSBODY LEATHER PURSE BAG",
                price:  "227.52",
                galleryURL: "http://i.ebayimg.com/00/s/MTAyM1gxMDQ2/z/UPIAAOxyGwNTBm61/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAyM1gxMDQ2/z/UPIAAOxyGwNTBm61/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzAxWDcxNg==/z/V~EAAOxyni9TBm62/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg1ODI=/z/eQYAAOxy4fVTBm63/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MTk=/z/fMoAAMXQVT9TBm64/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODUzWDEyODA=/z/C64AAOxy0NtTBm66/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODIzWDEyODA=/z/MAAAAOxy-WxTBm67/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzgwWDEyODA=/z/IpwAAOxy0bRTBm69/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzMyWDEyODA=/z/-Z0AAMXQEgpTBm69/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyM1gxMTQ5/z/MGcAAOxy-WxTBm6~/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "331366641938"
                ,
                title: "NWT Coach Legacy Textured Leather Rory Large Satchel Brass/Cement/Black 20201",
                price:  "388",
                galleryURL: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/TIYAAOxyzHxRRpRi/$T2eC16VHJF8E9nnC7NsnBRRpRhWVu!~~60_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/TIYAAOxyzHxRRpRi/$T2eC16VHJF8E9nnC7NsnBRRpRhWVu!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/LywAAMXQvJVRRpRl/$T2eC16hHJIIE9qTYMbBiBRRpRkes,w~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/Y9IAAMXQfFJRRpRo/$T2eC16Z,!zQE9s3stvEIBRRpRnw44w~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/qeoAAOxyyF5RRpRr/$T2eC16ZHJHEE9ny2sY0KBRRpRqvBWw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/Y~8AAMXQfFJRRpRx/$T2eC16RHJHQE9nzEzNe!BRRpRuZ0h!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/O6YAAMXQCtlRRpRz/$T2eC16h,!)QE9s3HG-1iBRRpRy)Jmw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/TPAAAOxyzHxRRpR2/$T2eC16d,!)QE9s3HF4leBRRpR1JuEg~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/p9kAAOxyY9VRRpR4/$T2eC16d,!ysE9sy0jKf0BRRpR30C5g~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/SmAAAMXQlUNRRpR6/$T2eC16V,!ygE9s7HI7DwBRRpR6L9Ow~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTYwWDEyODA=/z/pDAAAOxyoA1RRpR9/$T2eC16Z,!ygE9s7HJ-utBRRpR8smkg~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTYwWDEyODA=/z/uVIAAOxyA4ZRRpSB/$T2eC16FHJHQE9nzEyJ!bBRRpS!WqMw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/O9IAAMXQCtlRRpSD/$T2eC16F,!)0E9s37FciBBRRpSC7!RQ~~60_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251698333064"
                ,
                title:
                    "2014 Fashion Womens Leather Handbag Designer Shoulder Bag Lady Messenger Bags"
                ,
                price:  "19.99",
                galleryURL: "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/u08AAOSwU9xUUlSW/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/u08AAOSwU9xUUlSW/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTUwWDU1MA==/z/2PMAAOSw6EhUUlSY/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/V4cAAOSw8cNUUlSa/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTQ3WDc0Mw==/z/71sAAOSwDN1UUlR9/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjA3WDU3OQ==/z/XdIAAOSwQJ5UUlRw/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjE0WDUxNQ==/z/1DEAAOSw6EhUUlR1/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjEzWDU4Ng==/z/ErMAAOSwR0JUUlR7/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDcwWDYzNw==/z/VEAAAOSw8cNUUlSB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTgyWDU4Mg==/z/8U0AAOSwcu5UUlSJ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTYxWDYxMQ==/z/YMkAAOSwQJ5UUlSF/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDU1WDY1MQ==/z/bJsAAOSwF1dUUlSN/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "161492429588"
                ,
                title: "Celine Red Leather & Suede Trapeze Shoulder Tote Bag, Mint",
                price:  "2700",
                galleryURL: "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/zy0AAOSwg3FUbtEK/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/zy0AAOSwg3FUbtEK/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/GsUAAOSw2XFUbtEM/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/VCMAAOSwAL9UbtEO/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/s7YAAOSw7ThUbtEP/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/VFQAAOSwAL9UbtER/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/s90AAOSw7ThUbtET/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/VHoAAOSwAL9UbtEU/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/FvkAAOSwQJhUbtEW/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/p5kAAOSwkNZUbtEZ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/VM0AAOSwAL9UbtEc/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/n-4AAOSwj0NUbtEe/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg4NTA=/z/oAwAAOSwj0NUbtEg/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "17499"
                ,
                title: "Authentic Hermes Orange Togo Leather Birkin 35cm Handbag (Q Year)",
                price:  "17499",
                galleryURL: "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/kMwAAMXQ4uJSGx-s/$(KGrHqIOKo0FH+6q1!LtBSG)-rj1i!~~60_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/kMwAAMXQ4uJSGx-s/$(KGrHqIOKo0FH+6q1!LtBSG)-rj1i!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/rNEAAOxym2BSGx-p/$T2eC16d,!zEE9s3!Y88yBSG)-ovt9!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/vrUAAMXQaZxSGx-o/$T2eC16V,!yME9s5qGsv)BSG)-oLM3!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/pxwAAOxyHQlSGx-p/$T2eC16VHJIgFHR3nWFG2BSG)-oqnBg~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/cgoAAMXQxKxSGx-p/$T2eC16NHJHIFFhkutnJLBSG)-okv+g~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/GmgAAMXQ6DBSGx-o/$T2eC16N,!)kE9s4Z-u5hBSG)-oUckw~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/vNEAAMXQAEFSGx-o/$(KGrHqF,!q8FIPu(GQ92BSG)-oS+uQ~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/oUkAAOxy06hSGx-r/$(KGrHqZ,!nwFIJ(N1SZ)BSG)-qSyZQ~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/p7sAAOxyJmhSGx-p/$(KGrHqJ,!mIFICgG+G+!BSG)-pdv,g~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/JkwAAOxy9LxSGx-p/$T2eC16NHJIgFHRk4KFTJBSG)-pDMBg~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/yCgAAMXQlbVSGx-q/$T2eC16FHJIIFHKEbWiVJBSG)-pMzI!~~60_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/5noAAOxy77hSGx-o/$T2eC16J,!yUE9s6NEGmuBSG)-oQMq!~~60_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "111492920336"
                ,
                title: "Annabel Ingall - Isabella Tote- Small size- 12 Colors",
                price:  "399",
                galleryURL: "http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/IGAAAOSwDN1UQUEa/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/IGAAAOSwDN1UQUEa/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/cuIAAOSwcu5UQUAq/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/NooAAOSwR0JUQT~1/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/OacAAOSwF1dUQT85/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/XO4AAOSwr81UQT79/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/nGcAAOSw8cNUQT68/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/YbcAAOSwcu5UQT-u/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/h4sAAOSwcu5UQUDB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjUwWDY1MA==/z/GzsAAOSwAHZUQUFI/$_1.JPG?set_id=880000500F"
                ]
            }
        ]
    };

    return res.json(200, {'searchResult': searchResult});
};
exports.shoe = function(req, res) {

    var searchResult = {
        "count" :   10,
        "items" :   [
            {
                itemId:   "321595214799",
                title:    "shoes",
                price:  "300",
                galleryURL: "http://i.ebayimg.com/00/s/Njc2WDcyMA==/z/FO4AAOSwn51UaDkK/$_1.JPG?set_id=8800005007F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/Njc2WDcyMA==/z/FO4AAOSwn51UaDkK/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQ1WDcyMA==/z/q2EAAOSwKrxUaDkd/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjAwWDE5OQ==/z/7~0AAOSw~FNUaDm-/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjAwWDQ2MA==/z/kcwAAOSwcldUaDnH/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjAwWDM3MA==/z/HCAAAOSwn51UaDnN/$_1.JPG?set_id=8800005007F"
                ]
            },
            {
                "itemId":
                    "251727128426"
                ,
                price:  "348",
                title: "NIB Giuseppe Zanotti 120MM Patent Leather Sandals in Rosa (Pink) women's size 8 ",
                galleryURL: "http://i.ebayimg.com/00/s/ODIwWDY0MA==/z/8soAAOSwEppUSm9m/$_1.JPG?set_id=8800005007F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODIwWDY0MA==/z/8soAAOSwEppUSm9m/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NTMzWDQwMA==/z/UdMAAOSwajVUSm6l/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NTMzWDQwMA==/z/mdQAAOSwF1dUSm7E/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NDE3WDUxMg==/z/G~sAAOSw6EhUSm8z/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NDE3WDUxMg==/z/AAsAAOSwZkJUSm9G/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NTMzWDQwMA==/z/7nkAAOSwZkJUSm6t/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NDE3WDUxMg==/z/qbUAAOSwF1dUSm9V/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NTMzWDQwMA==/z/crcAAOSw8cNUSm6f/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NTMzWDQwMA==/z/d7UAAOSw8cNUSm7S/$_1.JPG?set_id=8800005007F"
                ]

            },{
                itemId:
                    "331197706863"
                ,
                title: "CHRISTIAN LOUBOUTIN Pink Miminette 70 Patent Heels, Size 37.5 7 Shoes ",
                price:  "500",
                galleryURL:  "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/raEAAOSwbqpT65Lp/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/raEAAOSwbqpT65Lp/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/A~0AAOSwVFlT65Ls/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/1VwAAOSwDk5T65Lu/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/WqgAAOSwd4tT65Lw/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/0acAAOSwPe1T65Ly/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/0doAAOSwPe1T65L0/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDEyMDA=/z/WycAAOSwd4tT65L1/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "261653768108"
                ,
                title: "Jimmy Choo High Heel Pumps size 9",
                price:  "500",
                galleryURL: "http://i.ebayimg.com/00/s/OTcxWDk2Ng==/z/67AAAOSwajVUNrQR/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/OTcxWDk2Ng==/z/67AAAOSwajVUNrQR/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTU0WDEwNjc=/z/lZ0AAOSwAHZUNrQT/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFg5OTI=/z/ozEAAOSwr81UNrQU/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMjI4/z/ikMAAOSwdsFUNrQV/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMjQ4/z/liUAAOSwAHZUNrQX/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMzM1/z/7KoAAOSwajVUNrQZ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTEyWDE2MDA=/z/7NQAAOSwajVUNrQa/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "111482273105"
                ,
                title: "Dolce & Gabbana Pink Patent Leather Peep Toe pump heel sz 39"   ,
                price:  "500",
                galleryURL: "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/M3cAAOSwEK9T38h1/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/M3cAAOSwEK9T38h1/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/M8cAAOSwEK9T38h4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/uvsAAOSwq7JT38h5/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/lPAAAOSw7NNT38h4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/J9oAAOSwd4tT38h7/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/p64AAOSwVFlT38h7/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/lYwAAOSw7NNT38h8/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/GZkAAOSwGvhT38h-/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTU5OVgxNTk5/z/GcoAAOSwGvhT38h~/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "271670907225"
                ,
                title: "Giuseppe Zanotti cut out boots, booties, shoes $1,095 SZ 39 US 9",
                price:  "499.99",
                galleryURL: "http://i.ebayimg.com/00/s/NTg1WDM5MA==/z/P-4AAOSwofxUcQ0a/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NTg1WDM5MA==/z/P-4AAOSwofxUcQ0a/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDYwMA==/z/DUsAAOSwmUdUUu0f/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTAwWDYwMA==/z/VIAAAOSwdpxUUu02/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "111505436414"
                ,
                title: "Christian Louboutin Decollete Jazz Calfskin Pumps Size39/9",
                price:  "499.99",
                galleryURL: "http://i.ebayimg.com/00/s/Njc0WDU3OA==/z/jEkAAOSwEK9TylnP/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/Njc0WDU3OA==/z/jEkAAOSwEK9TylnP/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/Njk4WDUyMw==/z/A5UAAOSwKPNTylnb/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjQ5WDU3OQ==/z/BNQAAOSwKPNTylnl/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/3AIAAOSwPTlTylmV/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/4PMAAOSwPTlTylm9/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/3xUAAOSwPTlTylmu/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/AL0AAOSwKPNTylnC/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/36UAAOSwPTlTylmy/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/ysUAAOSwbqpTylm4/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk1/z/i6EAAOSwEK9TylnG/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "201212286719"
                ,
                title: "Jimmy Choo Lottie Patent Strappy Sandals size 38.5 Orange flame shoes $750 vamp",
                price:  "499.99",
                galleryURL: "http://i.ebayimg.com/00/s/MTE5N1gxMDg3/z/6hwAAOSw~1FUW6BV/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTE5N1gxMDg3/z/6hwAAOSw~1FUW6BV/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/6lwAAOSw~1FUW6BX/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMDY0/z/c4cAAOSwdpxUW6BZ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/qJMAAOSw1XdUW6Ba/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMDY0/z/6uwAAOSw~1FUW6Bc/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/2yUAAOSwrx5UW6Be/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMDY0/z/L8YAAOSwyTZUW6Bg/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/dLMAAOSwdpxUW6Bi/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/130AAOSwmUdUW6Bk/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NFgxNjAw/z/RQoAAOSwLa9UW6Bm/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMDY0/z/w2sAAOSwosFUW6Bo/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMDY0/z/2EMAAOSwmUdUW6Bq/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "321386642234"
                ,
                title: "Alexandre Birman shoes - Turquoise Blue Python Platform Pumps",
                price:  "499.95",
                galleryURL: "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/PGwAAMXQ6DBSCqBC/$(KGrHqR,!ogFHwEiU0SrBSCqBB7Ujw~~60_1.JPG?set_id=8800005007",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/PGwAAMXQ6DBSCqBC/$(KGrHqR,!ogFHwEiU0SrBSCqBB7Ujw~~60_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/pFUAAOxy9tpSCqBE/$(KGrHqF,!rcFHtL3-NFeBSCqBEDTkw~~60_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/gWMAAOxy0QtSCqBG/$(KGrHqJHJE8FIHmbMY02BSCqBGQnOQ~~60_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/FHoAAOxyhSBSCqBI/$(KGrHqZHJDgFIJosO3gsBSCqBIbVvQ~~60_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NjQwWDQ4MA==/z/OmkAAMXQGQRSCqBK/$(KGrHqZ,!pIFH)bses49BSCqBKg,fw~~60_1.JPG?set_id=8800005007"
                ]
            },{
                itemId:
                    "221335878919"
                ,
                title: "$950 Chanel Classic Pump CC Logo Silver and Gold Glitter with Flower 36 1/2 EU 6",
                price:  "499",
                galleryURL: "http://i.ebayimg.com/00/s/MTI2NlgxNjAw/z/GfgAAMXQVT9Sqjzd/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTI2NlgxNjAw/z/GfgAAMXQVT9Sqjzd/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTQ1MlgxNjAw/z/PAsAAOxyRhBSqjzj/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTUwMlgxNDY3/z/lbkAAMXQVERSqjzp/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTkzWDE2MDA=/z/EY0AAMXQlgtSqjzu/$_1.JPG?set_id=880000500F"
                ]
            }
        ]
    };

    return res.json(200, {'searchResult': searchResult});
};
exports.watch = function(req, res) {

    var searchResult = {
        "count" :   10,
        "items" :   [
            {
                itemId:   "311181428673",
                title:    "IWC Schaffhausen Da Vinci Perpet Mens 18K Gold Swiss Automatic Watch IW376102",
                price:  "26613",
                galleryURL: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/RlUAAOSwcF9UWo4D/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/RlUAAOSwcF9UWo4D/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/OsIAAOSwBP9UWo36/$_12.JPG?set_id=880000500F"
                ]
            },
            {
                "itemId":
                    "201221532212"
                ,
                price:  "31387",
                title: "Cartier Ballon Bleu Mens 18K WG Black Leather Swiss Mechanical Watch W6920055",
                galleryURL: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/PVkAAOSwbqpT7ppy/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/PVkAAOSwbqpT7ppy/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/bhoAAOSwnDZT7ppz/$_12.JPG?set_id=880000500F"
                ]

            },{
                itemId:
                    "311181673088"
                ,
                title: "Tag Heuer Carrera Mens Swiss Automatic Chronograph Watch CAR2012.BA0796",
                price:  "3553",
                galleryURL: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/~hgAAOSwcldUZADk/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/~hgAAOSwcldUZADk/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/Lp0AAOSwYshUZADk/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "381058984951"
                ,
                title: "IWC Schaffhausen Pilots Mens Swiss Automatic Black Leather Watch IW326501",
                price:  "3196",
                galleryURL: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/ku8AAOSwzOxUWsGp/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/ku8AAOSwzOxUWsGp/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/mnIAAOSwBP9UWsGZ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/oL8AAOSw1XdUWsGX/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "141478805770"
                ,
                title: "Patek Philippe Mens Gondolo 5135 18k White Gold Automatic Watch 5135G Box/Papers",
                price:  "39995",
                galleryURL: "http://i.ebayimg.com/00/s/MTYwMFgxMTk2/z/adEAAOxycD9TUYU9/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTk2/z/adEAAOxycD9TUYU9/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMjE4/z/z~AAAMXQyY1TUYVF/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTQ4MFgxNjAw/z/Ol8AAOxylpNTUYVO/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTM4M1gxNjAw/z/0egAAMXQyY1TUYVW/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwM1gxNjAw/z/bdYAAOxycD9TUYVh/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTQ4MlgxNjAw/z/-tYAAOxy7nNTUYVs/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "181442235571"
                ,
                title: "Jaeger LeCoultre Duometre Silver Dial Leather Mens Watch Q6012420",
                price:  "32620",
                galleryURL: "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/AS0AAOSwEK9TvrlB/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/AS0AAOSwEK9TvrlB/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/AWsAAOSwEK9TvrlD/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/~1gAAOSwwPtTvrlE/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "151414321141"
                ,
                title: "Cartier Calibre de Cartier Silver Dial 18K Rose Gold Automatic Mens Watch",
                price:  "31995",
                galleryURL: "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/QHYAAOSwxH1UIH64/$_12.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/QHYAAOSwxH1UIH64/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/CAoAAOSwPe1UIH6Z/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/ggcAAOSwDk5UIH6a/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/9lkAAOSwq7JUIH6c/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251712691836"
                ,
                title: "Cartier 18kt Ballon Bleu 42mm W69005Z2 Solid Yellow Gold Automatic Watch Mens",
                price:  "29800",
                galleryURL: "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U3oAAOxy~dNTILcN/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/U3oAAOxy~dNTILcN/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMjI2/z/BhQAAOxy3zNSe9dX/$(KGrHqR,!ngFJj,PTF5gBSe9d(,mgg~~60_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxMTI0/z/6T8AAMXQfvlSe9dR/$(KGrHqJ,!pIFJVf)-pyMBSe9dR)Dcw~~60_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251657598584"
                ,
                title: "Rolex 18206 Platinum Presidential Day-Date Mens Watch w/ Diamond Dial",
                price:  "26495",
                galleryURL: "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/hEUAAOSwGvhUJExF/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/hEUAAOSwGvhUJExF/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/JA4AAOSwfcVUJExI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/yZYAAOSw7NNUJExI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/SWsAAOSwEK9UJExI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/AzQAAOSwd4tUJExK/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/ydkAAOSw7NNUJExK/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTE0OFgxMTQ4/z/JEgAAOSwfcVUJExK/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/PXsAAOSwQItUJExM/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/A3sAAOSwd4tUJExM/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTU2OVgxNTY5/z/ELYAAOSwnDZUJExM/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTU5OVgxNTk5/z/c8QAAOSwxH1UJExO/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251513277051"
                ,
                title: "Audemars Piguet Royal Oak Offshore 26400SO.OO.A002CA.01 Steel Watch for Men",
                price:  "25495",
                galleryURL: "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/DlsAAOxy0bRS~SEC/$_1.JPG?set_id=880000500F",
                pictureURL: [
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/DlsAAOxy0bRS~SEC/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/DqAAAOxy0bRS~SEE/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/-zAAAMXQlgtS~SEF/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/DqQAAOxy0bRS~SEE/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/-1AAAMXQlgtS~SEG/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/p10AAOxydlFS~SEI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTQ5MFgxNDkw/z/fH4AAOxy63FS~SEG/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTI3NlgxMjc2/z/kUAAAOxyVLNS~SEG/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/zmgAAOxyJX1S~SEJ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTU1M1gxNjAw/z/DHMAAOxy4fVS~SEI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/h28AAOxy69JS~SEK/$_1.JPG?set_id=880000500F"
                ]
            }
        ]
    };

    return res.json(200, {'searchResult': searchResult});
};