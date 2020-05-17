export class Usuarios {
    id: number;
    username: string;
    document: string;
    misena_email: string;
    institutional_email: string;
    positionId: number;
    schedules: [];
    position: {
        id: string,
        name: string,
        type: string
    };
}
