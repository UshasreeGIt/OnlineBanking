import { Customer } from "./customer";

export class Account extends Customer {
    accountNumber!: number;
    accountType!:string;
    accountNickName!:string;
    accountActive!:boolean
}
