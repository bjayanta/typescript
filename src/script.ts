// Example:

enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN }

interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;
}

const res: APIResponse<string> = {
    status: 200,
    type: RType.UNAUTHENTICATED,
    data: "Test"
}

console.log(res);
