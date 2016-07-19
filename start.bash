pm2 flush;
tokill=`ps -fe|grep  PM2|awk '{ printf $2" "}'`; kill -9 $tokill;
tokill=`ps -fe|grep  'node --debug='|awk '{ printf $2" "}'`; kill -9 $tokill;
pm2 start start_server.js --node-args="--debug=5859";
sudo service nginx restart;