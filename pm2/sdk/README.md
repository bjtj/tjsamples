# PM2 API #

<https://pm2.keymetrics.io/docs/usage/pm2-api/>

## Preparation ##

```bash
npm i
pm2 start --name "myproc" app.js
pm2 logs myproc
```


## Run (open another terminal) ##

```bash
node index.js
```

```bash
node index.js my-message
```


## Clean up ##

```bash
pm2 delete myproc
```
