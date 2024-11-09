import { Injectable, Scope } from "@nestjs/common";

@Injectable({
    scope :Scope.REQUEST
})
export class ScopeddService{
    getMessage(){
        return 'Scoped service message'
    }
}