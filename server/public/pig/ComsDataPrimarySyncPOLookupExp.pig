REGISTER 'hdfs://artemis-nn.vip.ebay.com:8020/user/appmon/pig/jars/pig-sdk-1.0.0.jar'
A = LOAD 'tmp' using com.ebay.appmon.reports.pig.CalRecordLoader('$colo', '$env', '$pool', '$machine', '$startDate', '$endDate', '$sampling') as (thrdId:chararray, type:chararray, time:long, name:chararray, messageClass:chararray, level:chararray, duration:float, data:chararray, status:chararray, dataMap:map[], env:chararray, machine:chararray, pool:chararray, publisher:chararray);
X = FILTER A BY messageClass MATCHES '[E].*';
XX = FILTER X BY type MATCHES 'Error';
Y = FILTER XX BY name MATCHES 'COMS_BES_PrimarySync_PO';
YY = FILTER Y BY data MATCHES 'com.ebay.mmp.coms.lookup.api.OrderLookupException.*is stale.*';
D = GROUP YY BY name;
E = FOREACH D GENERATE group, COUNT(YY.name), 'OrderLookupException' , 'Order version is stale : Error occured syncing';
STORE E into '$output' using PigStorage(',');