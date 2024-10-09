import { Status } from "./status";

export class Reminder {
    constructor(
        public id: number,
        public shortDescription: string,
        public fullDescription: string,
        public createdAt: Date,
        public completedAt: Date,
        public status: Status
      ) {}
}
