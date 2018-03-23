# aca

## build
```
npm install --save dev

# edit config file
mv config/cognito.js.example config/cognito.js
npm run build
aws s3 sync . s3://status.96over.com/ --delete --exclude "*" --include "index.html" --include "static"
```


```
npm start
```
