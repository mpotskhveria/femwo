import { Injectable } from "@angular/core"



@Injectable({
    providedIn: 'root'
})


export class LogerService {

    logThem(){
        console.log('One service to log them all')
    }
    
}