import { Injectable, Provider } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService , private jwtservice: JwtService) {}

    async validateUser(name:string , password:string): Promise<any>{
        try {
            const user = await this.userService.findByUsername(name)
            if (user && (await bcrypt.compare(password, user.password))) {
                const { password, ...result } = user.toObject();
                return {...result};
            }
        } catch (err){
            console.log('Error', err)
            return null;
        }
        
    }
    
    async login(user:any){
        const payload = {name: user.name , sub: user.userId};
        return {
            access_token: this.jwtservice.sign(payload)
        }
    }
}
