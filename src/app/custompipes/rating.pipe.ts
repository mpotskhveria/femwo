import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'rating'
})

export class PercentagePipe implements PipeTransform {

    transform(value: number, max: number, dec: number){
        return   (value * 100 / max).toFixed(dec)
    }

}

