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
                itemId:   "131326518221",
                title:    ["New Womens Leather Fashion Messenger Handbag Lady Shoulder Bag Totes Purse Hobo"],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/pict/131326518221404000000001_1.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/SeEAAOSwF1dUUY8X/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/kX8AAOSwcu5UUY8D/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/SUkAAOSwY45UUY9M/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/Mh8AAOSw8cNUUY8g/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/sSgAAOSwEppUUY9L/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/SBQAAOSwU9xUUY9L/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/l0UAAOSwcu5UUY9K/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/OMwAAOSw8cNUUY9y/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/~WkAAOSwR0JUUY-M/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/SgYAAOSwY45UUY9T/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/0rcAAOSw6EhUUY9I/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzY4WDc2OA==/z/mAIAAOSwcu5UUY9T/$_12.JPG?set_id=880000500F"
                ]
            },
            {
                "itemId":
                    "251722263135"
                ,
                price:  "13.99",
                "title": [
                    "Women's Fashion Designer Handbag, MSRP $42.95 Faux Leather, Brand New with Tags!"
                ],
                "galleryURL": [
                    "http://thumbs4.ebaystatic.com/m/mpcPaRpventXHPrwtaDrteA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NDgwWDY0MA==/z/ipgAAOxyuR5Tab2j/$_1.JPG?set_id=880000500F"
                ]

            },{
                itemId:
                    "381058566451"
                ,
                title: [
                    "NWT Vera Bradley Hipster in English Rose Free USA Shipping"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs4.ebaystatic.com/m/m5mfv3iMAP6ClcOCxop3UXg/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NzQwWDg3Mg==/z/eIcAAOSwAF5UZkNh/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzUyWDg4Nw==/z/MbEAAOSw0vBUZkNj/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "131352388209"
                ,
                title: [
                    "Michael Kors Small Black Leather Purse"
                ],
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/mhchXKfeK9_exke5UvnE7TA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/3KkAAOSwuMFUafQJ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/4OoAAOSw~FNUafQU/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/c~IAAOSwcldUafQf/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/DxEAAOSwAF5UafQp/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTA2NlgxNjAw/z/F5wAAOSw2XFUafQ0/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "251724953604"
                ,
                title: [
                    "NWT Vera Bradley Retired Sittin in a Tree Bowler Sachel Bag & Wristlet Set"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mLgYuArB0xT2sLybkBMdpHA/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/F~0AAOSwkZ9UYjNc/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/G00AAOSwdpxUYjNj/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/~gAAAOSw~1FUYjNq/$_1.JPG?set_id=8800005007F",
                    "http://i.ebayimg.com/00/s/NjQwWDY0MA==/z/5MgAAOSw54xUYjNy/$_1.JPG?set_id=8800005007F"
                ]
            },{
                itemId:
                    "131352388405"
                ,
                title: [
                    " TORY BURCH THEA CROSSBODY CHAIN wildflower LEATHER BAG $375"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/m1hzkBehpN3B2SWrqteC02w/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/ODkxWDk1MA==/z/0HAAAOSwY45UTl4x/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/oksAAOSwDN1UTl2V/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/DjgAAOSwEppUTl2r/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/OTIxWDkyMQ==/z/VKwAAOSw6EhUTl3K/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAyNFg5MjE=/z/zgsAAOSwajVUTl3o/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwN1g4NjA=/z/QegAAOSw8cNUTl4F/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAxWDkxNA==/z/jycAAOSwF1dUTl4b/$_12.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "381020757876"
                ,
                title: [
                    "New Women Satchel Bag fashion Tote Messenger leather purse shoulder handbag"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mfdG7Zb8pS_PyUFEOWV4XcQ/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FycAAOSwxH1UKMKt/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/t-kAAOSwGvhUKMKV/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/5RcAAOSwQItUKMKb/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/8kIAAOSwq7JUKMKe/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/r0QAAOSwnDZUKMKh/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/POkAAOSwfcVUKMKk/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/m8YAAOSwd4tUKMKm/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FA8AAOSw7NNUKMKp/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/FD0AAOSw7NNUKMKr/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/MTAwMVgxMDAx/z/8esAAOSwq7JUKMKY/$_1.JPG?set_id=8800005007"
                ]
            },{
                itemId:
                    "291301064192"
                ,
                title: [
                    "Tory Burch Dena Foldover Messenger Bag Leather Crossbody/Clutch Green NICE"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mqGBlaJbKg4f3LVsyAlkeyw/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NzUwWDgwMA==/z/qfMAAOSwiCRUbMJx/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzI4WDgwMA==/z/538AAOSw2XFUbMKH/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDc4Mg==/z/q58AAOSwiCRUbMKB/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzIzWDgwMA==/z/NNIAAOSwD0lUbMKI/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MjM3WDgwMA==/z/NK0AAOSwD0lUbMKH/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/ODAwWDY4MQ==/z/66UAAOSwIBBUbMKQ/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NTU4WDgwMA==/z/o28AAOSwnDxUbMK~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjQxWDgwMA==/z/7hUAAOSw2XFUbMK4/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MzIwWDgwMA==/z/O9MAAOSwD0lUbMLC/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NDMzWDgwMA==/z/JwUAAOSwaNBUbMK~/$_1.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NjAxWDgwMA==/z/nhkAAOSwg3FUbMLF/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "181590147625"
                ,
                title: [
                    "Gorgeous Chanel Purse "
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs2.ebaystatic.com/m/mKiS8YX5w9zWaI6Q2F-Qcwg/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/guUAAOSwuMFUbMC~/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/r5MAAOSwofxUbMDE/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/csIAAOSwiCRUbMDI/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/NzUwWDEwMDA=/z/c14AAOSwiCRUbMDN/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/MtMAAOSwj0NUbMDQ/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/s0UAAOSw2XFUbMDq/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/tXAAAOSwofxUbMDv/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTAwMFg3NTA=/z/p34AAOSwAL9UbMD2/$_12.JPG?set_id=880000500F",
                    "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/3MMAAOSwaNBUce2H/$_1.JPG?set_id=880000500F"
                ]
            },{
                itemId:
                    "171428910768"
                ,
                title: [
                    "New Ladies Womens Hobo PU Leather Handbag Shoulder Crossbody Messenger Bag Purse"
                ],
                price:  "13.99",
                galleryURL: [
                    "http://thumbs1.ebaystatic.com/m/mq634KmzAy1tmT14IKB_-1Q/140.jpg"
                ],
                PictureURL: [
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/gSUAAOSwDk5T9Zel/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/L2sAAOSwRLZT9Zed/$_1.JPG?set_id=8800005007",
                    "http://i.ebayimg.com/00/s/NTg1WDU4NQ==/z/YQMAAOSwVFlT9Zef/$_1.JPG?set_id=8800005007"
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