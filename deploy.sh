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
  git init
  echo "$TRAVIS_TAG" > version.txt
  git config --global user.email "vipranarayan14@gmail.com"
  git config --global user.name "Travis CI"
  git add --all
  git commit -am "Deploy version $TRAVIS_TAG"
}
