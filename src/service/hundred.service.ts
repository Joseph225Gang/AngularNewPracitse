import {NumberService} from './number.service';

export class HundredService extends NumberService
{
    public getNum(): number {
        return 100;
    }   
}
