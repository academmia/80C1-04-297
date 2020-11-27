import {Status} from './enums';

interface Task {
    id: number; 
    subject: string;
    priority: string;
    status: Status; 
    // description: string;  // va da eroare in index.ts la 6.C: taskInfo(taskExt); 
    description?: string
    upperSubject?: () => string;
}

export {Task}
