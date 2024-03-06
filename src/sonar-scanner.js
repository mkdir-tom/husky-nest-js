const { env } = require('process');
const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: env.process.SONAR_URL,
    token: env.process.SONAR_TOKEN,
    options: {
      'sonar.sources': env.process.SONAR_SOURCES,
      'sonar.tests': 'src',
      'sonar.inclusions': 'src/**/*.ts', // Entry point of your code
      'sonar.test.inclusions':
        'src/**/*.spec.ts,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
    },
  },
  () => {
    console.log('Error Occurred while scanning');
  },
);