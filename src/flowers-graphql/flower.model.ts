import { ObjectType , Field , Int, Float } from "@nestjs/graphql";

@ObjectType()
export class FlowerModel{
    @Field(()=> Int)
    id : number 

    @Field()
    name : string

    @Field()
    color : number 


    @Field(()=> Float)
    price : number 

    @Field()
    createdAt : Date 

    @Field()
    updatedAt : Date 


}