// Example:

enum ResponseType { SUCCESS, FAILURE, UNAUTHENTIcaTED, FORBIDDEN }

interface APIResponse<T> {
    status: number;
    type: number;
    data: T;
}

const res1: APIResponse<string> = {
    status: 200,
    type: 1,
    data: "Test"
}