import {NumberService} from './number.service';

export class TenService extends NumberService
{
    public getNum(): number {
        return 10;
    }   
}
