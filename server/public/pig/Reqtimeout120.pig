REGISTER 'hdfs://artemis-nn.vip.ebay.com:8020/user/appmon/pig/jars/pig-sdk-1.0.0.jar'
 
define LogView com.ebay.appmon.reports.pig.udfs.LogViewUrl();
 
A = LOAD 'tmp' using com.ebay.appmon.reports.pig.TransactionLoader('$colo', '$env', '$pool', '$machine', '$startDate', '$endDate', '$sampling') as (threadId:chararray, type:chararray, time:long, name:chararray, messageClass:chararray, duration:float, status:chararray, agent:chararray, referrer:chararray, userIP:chararray,records:chararray, env:chararray, machine:chararray,pool:chararray, publisher:chararray);
Y = FILTER A BY duration > 120000;
C = FOREACH Y GENERATE name,REGEX_EXTRACT(records, 'X-EBAY-API-SITEID=([0-9]+)', 1) as siteId,REGEX_EXTRACT(records, 'X-EBAY-API-COMPATIBILITY-LEVEL=([0-9]+)', 1) as version, REGEX_EXTRACT(records, 'X-EBAY-API-APP-NAME=([a-zA-Z0-9-:.]*)', 1) as appName;
D = GROUP C BY (name,siteId,version,appName);
F = FOREACH D GENERATE FLATTEN(group) as (name,siteId,version,appName), COUNT(C) as counts;
STORE F into '$output' using PigStorage(',');