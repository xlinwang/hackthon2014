REGISTER 'hdfs://artemis-nn.vip.ebay.com:8020/user/appmon/pig/jars/pig-sdk-1.0.0.jar'
 
define LogView com.ebay.appmon.reports.pig.udfs.LogViewUrl();
 
A = LOAD 'tmp' using com.ebay.appmon.reports.pig.TransactionLoader('$colo', '$env', '$pool', '$machine', '$startDate', '$endDate', '$sampling') as (threadId:chararray, type:chararray, time:long, name:chararray, messageClass:chararray, duration:float, status:chararray, agent:chararray, referrer:chararray, userIP:chararray,records:chararray, env:chararray, machine:chararray,pool:chararray, publisher:chararray);
Y = FILTER A BY duration > 120000;
B = GROUP Y BY name;
C = FOREACH B GENERATE group, COUNT(Y.name) as requestcount;

STORE C into '$output' using PigStorage(',');