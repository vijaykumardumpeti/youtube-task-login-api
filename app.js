
const express = require('express')
const bcrypt = require('bcrypt')

const {valiEmailFormat} =  require('./validateEmail')


const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()
app.use(express.json())



const {open} = sqlite
const path = require('path')

const dbPath = path.join(__dirname, 'users.db')

let dataBase;
const InitializeDBAndServer = async ()=>{
    dataBase = await open({
        filename: dbPath,
        driver: sqlite3.Database
    })

    app.listen(3001, ()=>{
        console.log("app started at server 3001")
    })
}
InitializeDBAndServer()

app.post("/api/login", async (request, response)=>{
const {name = "vijaykumar", email="vijaydumpeti70@gmail.com", password="#vijay3953",} = request.body

// INSERT INTO users (user_id,name, email, password,is_active, created_on, is_email_verified);

//(is_active, created_on, is_email_verified) values are given as default

        let emailPasswordMatch = false
        const getUserQuery = `SELECT * FROM users WHERE email LIKE '${email}'`;
        const user = await dataBase.get(getUserQuery)

            if(user !== undefined){
                const userPassword = user.password
                let isPasswordMatched = false;
                bcrypt.compare(password, user.password, (error, isMatched)=>{
                    if(error){
                        console.error('Error comparing passwords:', error);
                    }else{
                        isPasswordMatched = isMatched
                    }
                })
                if(user.email === email && isPasswordMatched){
                    return true
                }else{
                    return false
                }     
            }else{
                return false
            }           
        

    if(is_active === 1){
        if(password.length >= 8 && valiEmailFormat(email) && emailPasswordMatch){
            response.status(200)
            response.send("Login successfull")
              
            // response.send({jwtToken})
        }
    }else{
        response.send('There is issue with logging in please try again with correct credentials')
    }

    // const addUserQuery = `
    //     INSERT INTO
    //     users 
    //     (name, email, password)
    //     VALUES
    //     ('${name}', '${email}', '${password}');`;
    // const lastID = await dataBase.run(addUserQuery)
    // response.send(`${lastID} user added successfully`)
});


