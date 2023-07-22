// Example:

let a = [3, 'hello', {p: 3}];

a[0] = 6;
a[1] = 5;
// a[0] = false; // error -> only number/string/object

let b: [number, string, object] = [4, 'world', {t: 100}];

// b[1] = 10; // error -> position wise type

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
