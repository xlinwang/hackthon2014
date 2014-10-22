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
                "pool":"v3apicore",
                "machine":"phx,slc,sjc",
                "colo":"null",
                "sampling":"1"
            }

        }
    }
}

module.exports.cosmosTestPig = pigParams.cosmosTestPig;
module.exports.apiTestPig = pigParams.apiTestPig;