import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { jobtitle, JobtitleEnum } from "src/types/jobtitle"

export class CreateUserDto {

        @IsString()
        @IsNotEmpty()
        name:string

        @IsEmail()
        @IsNotEmpty()
        email:string

        @IsString()
        @IsNotEmpty()
        password:string

        @IsEnum(JobtitleEnum)
        jobtitle: jobtitle
    
}
