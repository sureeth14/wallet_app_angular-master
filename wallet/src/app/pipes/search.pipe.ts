// import {Pipe , PipeTransform} from "@angular/core";
//
// @Pipe({
//   name:'search'
// })
//
// export class SearchPipe implements PipeTransform{
//   transform(objects: any[], query:any): any[] {
//     console.log("query" + query);
//     if(query== null || query == "")
//       return objects;
//
//     return objects.filter({
//     (object) =>
//     {
//       let objstr = JSON.stringify(object).toLowerCase();
//       console.log(objstr);
//       let queyRef = query.toLowerCase();
//       console.log(queyRef);
//       console.log(objstr.indexOf(queyRef));
//
//       return (JSON.stringify(object).toLowerCase().indexOf(query.toLowerCase()) >= 0) ? true : false
//     }
//     }
//     });
//   }
// }
