import {NumberService} from './number.service';
import {HundredService} from './hundred.service';
import {TenService} from './ten.service';

let NumberFactory = () => {
   if((Math.random() * 5 % 2) == 1)
    return new TenService();
  else
    return new HundredService();
};

export let NumServiceProvider = {
    provide: NumberService,
    useFactory: NumberFactory
  };