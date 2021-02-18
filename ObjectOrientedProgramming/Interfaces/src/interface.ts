interface Foo {
    bar: number;
    bas: string;
}
var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

var foo_test: any;
var bar = <string> foo_test; 