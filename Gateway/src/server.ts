import ExpressConfig from "./config/express.config"
import morgan from "morgan";
import ROUTES from "./routes/routes";
import setupProxies from "./config/proxy";

const app = ExpressConfig()
const PORT = process.env.PORT || 5000

app.use(morgan("combined"))
setupProxies(app, ROUTES);

app.listen(PORT, () => console.log("Server Running on Port: " + PORT))

app.get('/', (_req, res) => {
    res.send('Gateway OK !!')
})