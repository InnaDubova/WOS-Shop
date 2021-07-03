const app = require("./app");
const dotenv = require("dotenv");
const connectDatabse = require("./Config/database");

dotenv.config({path: 'Backend/Config/config.env'});

connectDatabse();

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`))
