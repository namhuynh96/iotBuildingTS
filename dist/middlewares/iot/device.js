"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iotConfig_1 = __importDefault(require("../../aws/iotConfig"));
const device_1 = __importDefault(require("../../models/device"));
const deleteAWSDevice = async (req, res, next) => {
    try {
        const device = await device_1.default.findById(req.params.deviceId);
        if (!device) {
            return res.status(404).send();
        }
        iotConfig_1.default.deleteThing({
            thingName: device._id.toString()
        }, (err, _data) => {
            if (err)
                throw new Error();
        });
        next();
    }
    catch (e) {
        res.status(503).send();
    }
};
exports.deleteAWSDevice = deleteAWSDevice;
