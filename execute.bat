echo "Test Start"
cd testcases
set testpath=%1
casperjs --ssl-protocol=any  test %testpath% 
cd..