
const app = require("./app")
const {PORT}=process.env
console.log("hello to codespace")

app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT} `)
})