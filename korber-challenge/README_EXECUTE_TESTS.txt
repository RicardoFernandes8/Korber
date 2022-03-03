
---------------------------------------------------------------------
RUN BACKEND TESTS:

First: cd ./korber-challenge/be-challenge

Second: newman run Korber.postman_collection.json -d TestData.json

Requirements: newman previously installed

---------------------------------------------------------------------
RUN FRONTEND TESTS:

First: cd ./korber-challenge/fe-challenge

Second: npm install

Third: 
----- npx cypress run --spec ./cypress/integration/mytests/FactorialCalculation_Tests.js
----- npx cypress run --spec ./cypress/integration/mytests/Navigation_Tests.js

Requirements: node previously installed
