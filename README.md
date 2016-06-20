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
postgres:
start:
postgres -D 'C:\Program Files\PostgreSQL\9.5\data'

psql.exe -U postgres
--
first time:
https://wiki.postgresql.org/wiki/First_steps

CREATE SCHEMA test;
CREATE USER x PASSWORD 'y';
GRANT ALL ON SCHEMA test TO x;
GRANT ALL ON ALL TABLES IN SCHEMA test TO x;
\q

--
psql.exe -U x -d postgres
y
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
kill -9 [PM2]
pm2 start start_server.js --node-args="--debug=5858"
sudo service nginx restart

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


\q
su - root


------------------------------------
******BEFORE START WORKING WITH DB******:
pg_dump -d postgres > backup.sql

psql -d postgres

select * from Experimenter;
select * from Answer;

-----------------------------------------------------------
-----------------------------------------------------------
CREATE TABLE Answer1506(
   userId bigint,
   questionId text,
   rightAnswer text,
   userAnswer text,
   serialNumber int,
   duration double precision,
   skip boolean,
   timestamp timestamp default current_timestamp
);


CREATE TABLE Experimenter1506(
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

insert into Answer1506(userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp) select userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp  from Answer;

insert into Experimenter1506(ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId) select ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId from Experimenter;

CREATE TABLE realExperimenter1506(
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

insert into realExperimenter1506(ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId) select ID, start, timestamp, age, gender, selfTaught, baFinised, baStarted, baStudied, maFinised, maStarted, maStudied, phdFinised, phdStarted, phdStudied, yearsOfExperience,  programmingLanguages, assessSelfProgrammingSkills, firstTime, testPlanId from Experimenter1506 where id in (select userId from Answer1506) and age IS NOT NULL and age < 99;

CREATE TABLE realAnswer1506(
   userId bigint,
   questionId text,
   rightAnswer text,
   userAnswer text,
   serialNumber int,
   duration double precision,
   skip boolean,
   timestamp timestamp default current_timestamp
);

insert into realAnswer1506(userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp) select userId, questionId, rightAnswer, userAnswer, serialNumber, duration, skip, timestamp  from Answer1506 where userId in (select id from realExperimenter1506);

pg_dump -d postgres -t realAnswer1506 > backup12271506.sql


select count(*) FROM realAnswer1506 where rightAnswer = userAnswer and questionId = '1';


