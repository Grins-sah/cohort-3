"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true }
});
mongoose_1.default.connect("mongodb+srv://admin:g!VQGQn7tqB*82P@cluster0.ekkva.mongodb.net/brain");
const userModel = mongoose_1.default.model('users', userSchema);
app.use(express_1.default.json());
app.post('/api/v1/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const username = req.body.username;
    const password = req.body.password;
    console.log(zod_1.z.string(username).min(3).max(10));
    try {
        yield userModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            msg: "success"
        });
    }
    catch (err) {
        res.status(500).json({
            msg: err
        });
    }
}));
app.listen(3000);
