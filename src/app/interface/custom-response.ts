import { Server } from './server';
export interface CustomResponse {
    timestamp: Date;
    statusCode: number;
    status: string;
    reasons: string;
    message: string;
    developerMessage: string;
    data: {
        servers?: Server[], server?: Server;
    }
}