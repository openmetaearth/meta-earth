pipeline {
  agent any
  environment {
    qa_home = "/home/xingdao/qa-home"
    PATH = "/opt/go/bin/:${env.PATH}"
  }
  stages {
    stage('Wait for dependencies job - cosmos-sdk-0.46.0') {
      steps {
        build job: 'cosmos-sdk-0.46.0', wait: true, parameters: [string(name: 'BRANCH', value: params.cosmos_sdk_branch)]
      }
    }

    stage('Checkout me-chain') {
      steps {
         checkout([
              $class: 'GitSCM',
              branches: [[name: '${BRANCH}']],
              doGenerateSubmoduleConfigurations: false,
              extensions: [],
              submoduleCfg: [],
              userRemoteConfigs: [[
                url: 'git@github.com:stchain2022/me-chain.git',
                credentialsId: '2432580e-3beb-42f7-ab8a-9859617d43f1'
                ]],
          ])
      }
    }

    stage('Build me-chain') {
      steps {
        sh 'go mod tidy'
        sh 'make clean && make build'
      }
    }

    stage('SonarQube Scan') {
      steps {
        sh '/var/lib/jenkins/sonar-scanner/bin/sonar-scanner'
      }
    }

    stage('Copy me-chaind to qa-home') {
      steps {
        sh 'cd ./build/ && zip me-chaind.zip me-chaind'
        sh 'cp ./build/me-chaind.zip ${qa_home}/roles/me-chain/files'
      }
    }

    stage('Deploy') {
     steps {
         script {
           if (params.ENVIRONMENT == 'develop') {
             sh 'cd ${qa_home} && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/develop/inventory --tags "$ansible_tags"'
           } else if (params.ENVIRONMENT == 'alpha-test') {
             sh 'cd ${qa_home} && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/alpha/inventory --tags "$ansible_tags"'
           } else if (params.ENVIRONMENT == 'beta-test') {
             sh 'cd ${qa_home} && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/beta/inventory --tags "$ansible_tags"'
           } else {
             error('Invalid environment specified!')
           }
         }
     }
     post {
       failure {
         echo 'Deployment failed!'
       }
     }
   }
  }
}