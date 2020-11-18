module.exports = {
    apps : [
        {
          name: "Rent-Api",   
          script: "./index.js",
          watch: false,
          env: {
            NODE_ENV: "local",
            postgre_user: "postgres",
            postgre_host: "localhost",
            postgre_database: "RentDB",
            postgre_password: "Password#1",
            postgre_port: "5432",
          },
          env_production: {
            NODE_ENV: "production",
            postgre_user: "postgres",
            postgre_host: "localhost",
            postgre_database: "postgres",
            postgre_password: "Nile!123",
            postgre_port: "5432",
          }
        }
    ]
  }