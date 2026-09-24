
export interface Account {
    firstName: string;
    lastName: string;
    email: string;

}

export interface Subscription {
    plan: string;
    end: Date;
    active: boolean;
}

export interface StatusRequests {
    currant: number;
    limit_day: number;
}

export interface StatusRespons {
    account: Account;
    subscription: Subscription;
    statusRequest: StatusRequests;

}