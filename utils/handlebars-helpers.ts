import { Entries } from "../types/entries";

export const handlebarsHelpers = {
    findPrice: (entrises: Entries , selectedItem: string):number => {
        const found = entrises.find(el => el[0] === selectedItem);
        if(!found){
            throw new Error(`Cannot find price of "${selectedItem}".`);
        }
        const [,price] = found;
        return price;
    },
    pricify: (price:number):string => price.toFixed(2),

    isInArray: <T>(arr: T[], el: T):boolean => arr.includes(el),

    isNotInArray: <T>(arr: T[], el: T):boolean  => !arr.includes(el),

    not: (arg:boolean):boolean => !arg,
};