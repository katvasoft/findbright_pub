import {Strategy} from 'passport-local';
import * as jwt from "jsonwebtoken";
import { queryUserWithUsername } from '../services/UserService';
import config from "../config/config";


export const login = async(username : string, password : string) => {

    const user = await queryUserWithUsername(username);

    if(user) {

        if(!(await user).checkIfUnencryptedPasswordIsValid(password)) {
            throw "Password does not match";
        }

        const token = jwt.sign(
            { userId: user.id, username: user.username },
            config.jwtSecret,
            { expiresIn: "1h" }
          );

        return token;

    } else {
        throw "No user found with username : " + username;
    }

}