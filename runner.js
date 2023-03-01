const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImRmZDM1N2Q5LWU1OGUtNDljZS04ZDBkLWNlNzZhNjIyM2UxNi0xNjc3NjMyNjM0ODA5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiN2M0ODgwMGItNGI4Ny00YTg4LWEzODktOTUxZGE4ZmI4ZTQ4IiwidHlwZSI6InQifQ.SannDq2U0RyQbyXQnnTVwHMWoR6uwNoVcDtB2UqCJMc' 

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
