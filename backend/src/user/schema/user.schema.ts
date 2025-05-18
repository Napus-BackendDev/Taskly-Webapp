import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { jobtitle, JobtitleEnum } from "src/types/jobtitle";
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document

@Schema()
export class User{
    
    @Prop({ required: true })
    name:string
    @Prop({ required: true , unique: true})
    email:string
    @Prop({ required: true})
    password:string

    @Prop({enum: JobtitleEnum})
    jobtitle: jobtitle

}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})