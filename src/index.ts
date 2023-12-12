export class log{
    static success(msg:string,background:string='none'){
       console.log(`%c ${msg}`,`color:green;background:${background}`);
    }

    static danger(msg:string,background:string='none'){
        console.log(`%c ${msg}`,`color:red;background:${background}`)
    }

    static info(msg:string,background:string='none'){
         console.log(`%c ${msg}`,`color:yellow;background:${background}`)
    }
}