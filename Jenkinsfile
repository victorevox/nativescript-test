pipeline {
    agent any
    stages {
        stage('unit-tests') {
            steps {
                sh 'tns test ios --justlaunch'
            }
        }
        stage('build') {
            steps {
                sh 'tns build ios'
            }
        }
        stage('e2e-tests') {
            steps {
                sh 'npm run e2e -- --runType=sim.iPhone6'
            }
        }
    }
}