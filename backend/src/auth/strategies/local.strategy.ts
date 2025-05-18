import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authservice: AuthService) {
        super({ usernameField: 'name'})
    }

    async validate(name:string , password:string): Promise<any> {
        const user = await this.authservice.validateUser(name , password);
        if (!user){
            throw new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}