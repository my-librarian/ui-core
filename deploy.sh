#!/usr/bin/env bash

file_deploy () {
  if [ ! -z "$TRAVIS_TAG" ] && [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
    rm -rf dist
    npm run build
    find dist -type f -exec curl -u $USER:$PASS $HOST -T {} \;
  else
    echo "This will not deploy!"
  fi
}

os_deploy() {
  npm run build
  cd dist
  git clone https://github.com/my-librarian/server-core.git
  cd server-core
  lastRelease=$(git describe --tags --abbrev=0)
  git checkout ${lastRelease}
  echo env=openshift > lib/deploy.ini
  mkdir -p api
  mv handlers api/
  mv lib api/
  mv index.php api/
  mv .htaccess api/
  cd ..
  mv server-core/api api
  rm -rf server-core
  git init
  echo "$TRAVIS_TAG" > version.txt
  git config --global user.email "vipranarayan14@gmail.com"
  git config --global user.name "Travis CI"
  git add --all
  git commit -am "Deploy version $TRAVIS_TAG"
}
