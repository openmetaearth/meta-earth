pipeline {
  agent any
  stages {
    stage('Checkout Cosmos SDK') {
      steps {
        git branch: 'main', credentialsId: '2432580e-3beb-42f7-ab8a-9859617d43f1', url: 'git@github.com:stchain2022/cosmos-sdk-0.46.0.git'
      }
    }

    stage('Build me-chain') {
      steps {
        sh 'cd me-chain && make clean && make build'
      }
    }

    stage('Copy me-chaind to qa-home') {
      steps {
        sh 'cp ./me-chain/build/me-chaind /home/xingdao/qa-home/roles/me-chain/files'
      }
    }

    stage('Deploy') {
      steps {
          script {
            if (params.ENVIRONMENT == 'develop') {
              sh 'cd /home/xingdao/qa-home && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/develop/inventory --tags "$ansible_tags"'
            } else if (params.ENVIRONMENT == 'alpha-test') {
              sh 'cd /home/xingdao/qa-home && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/alpha/inventory --tags "$ansible_tags"'
            } else if (params.ENVIRONMENT == 'beta-test') {
              sh 'cd /home/xingdao/qa-home && ansible-playbook roles/me-chain/tests/test.yml -i roles/me-chain/tests/beta/inventory --tags "$ansible_tags"'
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