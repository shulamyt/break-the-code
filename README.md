# break-the-code


open cmd and run:
(http://stackoverflow.com/questions/23726684/mongodb-on-a-windows-7-machine-no-connection-could-be-made)
mongod

https://www.npmjs.com/package/mongo-express
run from:
https://www.npmjs.com/package/mongo-express
http://localhost:8081/


https://codemirror.net/

http://localhost:3000/#/login

libs:

https://github.com/codemirror/CodeMirror/
https://github.com/beautify-web/js-beautify
https://github.com/kpdecker/jsdiff
https://github.com/siddii/angular-timer
https://github.com/EvanHahn/HumanizeDuration.js
http://momentjs.com/
https://github.com/fshost/node-dir
--------------------------------------------------
build
node r.js -o build.js


--------------------------------------------------

# open cmd
# go to main folder
# [run server]: node start_server.js

# open browser
# http://localhost:3000/#/login
--

CREATE SCHEMA test;
CREATE USER x PASSWORD 'y';
GRANT ALL ON SCHEMA test TO x;
GRANT ALL ON ALL TABLES IN SCHEMA test TO x;
\q

--
DROP TABLE Experimenter;
CREATE TABLE Experimenter(
	ID bigint PRIMARY KEY,
   start boolean,
	timestamp timestamp default current_timestamp,
   age int,
   gender text,
   selfTaught boolean,
   baFinised boolean,
   baStarted int,
   baStudied int,
   maFinised boolean,
   maStarted int,
   maStudied int,
   phdFinised boolean,
   phdStarted int,
   phdStudied int,
   yearsOfExperience int,
   programmingLanguages text ARRAY,
   assessSelfProgrammingSkills int,
   firstTime boolean,
   testPlanId text ARRAY
);
--
DROP TABLE Answer;
CREATE TABLE Answer(
   userId bigint,
   questionId text,
   rightAnswer text,
   userAnswer text,
   serialNumber int,
   duration double precision,
   skip boolean,
   timestamp timestamp default current_timestamp
);
--------------------------------
url:
http://getthecodes.com/#/login

restart in server:
cd ~
cd break-the-code
ps -ef



tokill=`ps -fe|grep  PM2|awk '{ printf $2" "}'`; kill -9 $tokill;
pm2 start start_server.js --node-args="--debug=5858";
sudo service nginx restart;

pm2 logs
//clear logs
pm2 flush

or

pm2 list
pm2 restart start_server
sudo service nginx restart
--------------------------------


CREATE SCHEMA test;
CREATE USER root PASSWORD 'pass';
GRANT ALL ON SCHEMA test TO root;
GRANT ALL ON ALL TABLES IN SCHEMA test TO root;

------------------------------------
******BEFORE START WORKING WITH DB******:
pg_dump -d postgres > backup0408.sql

psql -d postgres

select * from Experimenter;
select * from Answer;

-----------------------------------------------------------

pg_dump -d postgres -t realAnswer0408 > backup12271506.sql


select count(*) FROM realAnswer0408 where rightAnswer = userAnswer and questionId = '1';

-----------------------------------------------------------
-----------------------------------------------------------
CREATE TABLE Answer0408(
   userId bigint,
   questionId text,
   rightAnswer text,
   userAnswer text,
   serialNumber int,
   duration double precision,
   skip boolean,
   timestamp timestamp default current_timestamp
);


CREATE TABLE Experimenter0408(
   ID bigint PRIMARY KEY,
   start boolean,
   timestamp timestamp default current_timestamp,
   age int,
   gender text,
   selfTaught boolean,
   baFinised boolean,
   baStarted int,
   baStudied int,
   maFinised boolean,
   maStarted int,
   maStudied int,
   phdFinised boolean,
   phdStarted int,
   phdStudied int,
   yearsOfExperience int,
   programmingLanguages text ARRAY,
   assessSelfProgrammingSkills int,
   firstTime boolean,
   testPlanId text ARRAY
);

insert into Answer0408(userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp) select userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp  from Answer;

insert into Experimenter0408(ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId) select ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId from Experimenter;

CREATE TABLE realExperimenter0408(
   ID bigint PRIMARY KEY,
   start boolean,
   timestamp timestamp default current_timestamp,
   age int,
   gender text,
   selfTaught boolean,
   baFinised boolean,
   baStarted int,
   baStudied int,
   maFinised boolean,
   maStarted int,
   maStudied int,
   phdFinised boolean,
   phdStarted int,
   phdStudied int,
   yearsOfExperience int,
   programmingLanguages text ARRAY,
   assessSelfProgrammingSkills int,
   firstTime boolean,
   testPlanId text ARRAY
);

insert into realExperimenter0408(ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId) select ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId from Experimenter0408 where id in (select userId from Answer0408) and age IS NOT NULL and age < 99;

CREATE TABLE realAnswer0408(
   userId bigint,
   questionId text,
   rightAnswer text,
   userAnswer text,
   serialNumber int,
   duration double precision,
   skip boolean,
   timestamp timestamp default current_timestamp
);

insert into realAnswer0408(userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp) select userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp  from Answer0408 where userId in (select id from realExperimenter0408);




select questionId, duration from realAnswer0408 where rightAnswer != userAnswer and userId userId in (select id from realExperimenter0408);



-----------------------------------------------------------
-----------------------------------------------------------