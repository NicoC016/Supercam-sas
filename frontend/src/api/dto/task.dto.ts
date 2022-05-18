

export interface TaskDTO{
    id:number;
    title:string;
    descriptition:string
    status:statusTask;
}

export enum statusTask{
    created = 0,
    inProgress = 1,
    Done = 2
}