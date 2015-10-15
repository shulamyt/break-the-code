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
how to run:

# open cmd
# [run mongo]: mongod

# open cmd
# go to main folder
# [run server]: node start_server.js

# open browser
# http://localhost:3000/#/login

postgres
psql.exe -U postgres
--
first time:
https://wiki.postgresql.org/wiki/First_steps

CREATE SCHEMA test;
CREATE USER x PASSWORD y;
GRANT ALL ON SCHEMA test TO x;
GRANT ALL ON ALL TABLES IN SCHEMA test TO x;
\q

--
psql.exe -U y -d postgres
x
--
DROP TABLE Experimenter;
CREATE TABLE Experimenter(
	ID bigint PRIMARY KEY,
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
   testPlan text ARRAY
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
   timestamp timestamp default current_timestamp
);