import express from 'express';
require("./db/mongoose");
import adminRouter from "./routers/admin";
import userRouter from "./routers/user";
import buildingRouter from "./routers/building";
import roomRouter from "./routers/room";
import deviceRouter from "./routers/device";
import checkDevicesConnected from "./aws/checkConnected";
checkDevicesConnected();

const app = express();

app.use(express.json());
app.use(adminRouter);
app.use(userRouter);
app.use(buildingRouter);
app.use(roomRouter);
app.use(deviceRouter);

export default app;
