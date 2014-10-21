REGISTER 'hdfs://artemis-nn.vip.ebay.com:8020/user/appmon/pig/jars/pig-sdk-1.0.0.jar'

define LogView com.ebay.appmon.reports.pig.udfs.LogViewUrl();

A = LOAD 'tmp'
    using com.ebay.appmon.reports.pig.TransactionLoader('$colo', '$env', '$pool', '$machine', '$startDate', '$endDate', '$sampling')
    as (threadId:chararray, type:chararray, time:long, name:chararray, messageClass:chararray, duration:float, status:chararray, agent:chararray, referrer:chararray, userIP:chararray,records:chararray, env:chararray, machine:chararray,pool:chararray, publisher:chararray);
    B = FILTER A BY duration > 10000;
C = FILTER B BY name MATCHES 'OrderManagementSvcV1';
D = FOREACH C GENERATE duration, machine, LogView('http://appmon.vip.ebay.com/logviewui',env,pool,machine,time,threadId),REGEX_EXTRACT(records, '(orders_[^&]*|invoices_[^&]*|commitments_[^&]*)', 1);
STORE A into '$output' using PigStorage(',');