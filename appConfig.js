var developmentDatabase = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'database_name',
    user: 'gczgvwnoczrjfi',
    password: 'p4781aa5a1118932c1f5cacecf7c497274a27b1e837783e3db5eec7a06af85b89'
    }
    }
    
    var connectionString = "postgres://gczgvwnoczrjfi:4781aa5a1118932c1f5cacecf7c497274a27b1e837783e3db5eec7a06af85b89@ec2-3-234-109-123.compute-1.amazonaws.com:5432/d6q9pmuq7tq0j9";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }
    
