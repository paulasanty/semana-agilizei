const report = require('cucumber-html-reporter')
const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json',
    output: 'cypress/reports/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Nome": "DemoAutomation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};

report.generate(options)