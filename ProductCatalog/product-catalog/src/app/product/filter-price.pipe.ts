import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice',
  pure: false
})
export class FilterPricePipe implements PipeTransform {

  transform(value: any, filterPrice: any): any {

    const result:any=[];

    if(!value || !filterPrice){
      return value;
    }

    const min = Number(filterPrice.split("-")[0])

    const max = Number( filterPrice.split("-")[1])



    value.forEach((a: any) =>{



      if(a['price']>=min && a['price']<=max){

        result.push(a)

      }

    });

    return result;

  
  }

}
