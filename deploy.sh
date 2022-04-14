rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:didiyou/Dylan-ui-websit.git &&
git push -f -u origin main &&
cd -
echo https://didiyou.github.io/Dylan-ui-websit/index.html#/