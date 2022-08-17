constpath=require('path');
 
constjasmine_module=require('jasmine');
consttrx_reporter_module=require('jasmine-trx-reporter');
 
consttrx_config={ folder: 'test_results'};
lettrx_reporter_engine=newtrx_reporter_module(trx_config);
 
letjasmine_engine=newjasmine_module();
jasmine_engine.loadConfigFile(path.join(__dirname, 'jasmine.json'));
jasmine_engine.addReporter(trx_reporter_engine);
 
jasmine_engine.execute();
