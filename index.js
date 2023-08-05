const app = require('./requires');

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Listening on port http://localhost:${port}`);
});
