
 export interface ErrorMessage {
    message: string
    stack: Array<{
        line: number
        column: number
        filename: string
    }>
  }
  
   export function transform(info: string): ErrorMessage {
    let infosOfArray: Array<string> = info.split('\n');
    let result: ErrorMessage = {message: "", stack:[]};
    let isChrome: boolean;
    if (infosOfArray[0].indexOf("TypeError") > -1){
      result.message = infosOfArray.shift().split(":")[1];
      if (infosOfArray.length == 0) return result;
    }
    isChrome = infosOfArray[0].indexOf("at") > -1 ? true : false;
    infosOfArray.filter(info => info.indexOf(".js") > -1)
      .forEach(info => {
        let infoOfArray: Array<string> = isChrome ? info.split(" ") : info.split("@");
        let errorMessage: Array<string> = infoOfArray[infoOfArray.length - 1].split(".js");
        let element = {
          line: parseInt(errorMessage[1].split(":")[1]), 
          column: parseInt(errorMessage[1].split(":")[2]), 
          filename:  errorMessage[0].concat(".js")
        };
        result.stack.push(element);
  
    })
  return result;
  }
  
  