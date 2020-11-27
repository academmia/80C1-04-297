import { Status } from './enums';
interface Task {
    id: number;
    subject: string;
    priority: string;
    status: Status;
    description?: string;
    upperSubject?: () => string;
}
export { Task };
