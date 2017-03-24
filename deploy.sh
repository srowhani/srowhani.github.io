REMOTE=$(git config --get remote.origin.url)
ember build --prod;
cd dist;
git init;
git remote add origin $REMOTE;
git checkout master;
git add -A .;
git commit -m 'publish';
git push origin master -f;
cd ..;

echo 'Published!'
