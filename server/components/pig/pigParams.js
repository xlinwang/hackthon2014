/**
 * Created by xwang17 on 10/21/14.
 */

var pigParams = {

    cosmosTestPig:{
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-12:00',
                "endDate":'2014/10/20-12:06',
                "env":"null",
                "pool":"r1ordersvc",
                "machine":"null",
                "colo":"null",
                "sampling":"1"
            }

        }
    },

    apiTestPig:{
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3apixocore",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    },

    apiIntlPig:{
        data:{
            "inputParameters":
            {   "startDate":'2014/10/20-11:06',
                "endDate":'2014/10/20-12:06',
                "env":"prod",
                "pool":"v3apixointl",
                "machine":"null",
                "colo":"null",
                "sampling":"10"
            }

        }
    }
}

module.exports.cosmosTestPig = pigParams.cosmosTestPig;
module.exports.apiTestPig = pigParams.apiTestPig;
module.exports.apiIntlPig = pigParams.apiIntlPig;
