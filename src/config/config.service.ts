import { IConfigService } from "./config.interface";
import { DotenvParseOutput, config } from "dotenv";

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;
    
    constructor(){
        const {error, parsed} = config();
        if(error){
            throw new Error('Не найден файл .env!')
        }
        if(!parsed){
            throw new Error('Не найден файл .env!')
        }
    }

    get(key: string): string {
        throw new Error("Method not implemented")
    }

}