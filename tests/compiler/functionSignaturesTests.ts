﻿///<reference path='..\..\compiler\typescript.ts' />
///<reference path='..\..\harness\harness.ts' />

describe('Compiling tests\\compiler\\functionSignatureTests.ts', function() {
    it('Check overload with different return types.', function(){
        var code  = 'var foo: { bar(): string; bar(): number; };';
            code += 'var bar: { bar: { (): string; (): number; }; };';
            code += 'foo = bar;';
        Harness.Compiler.compileString(code, 'function signatures', function(result) {
            assert.equal(result.errors.length, 0);
        });
    })

    describe('Function Type Literals', function() {
        it('Basic sanity check', function() {
            var code  = 'var foo: { (): string; };';
                code += 'var bar: () => string;';
                code += 'foo = bar;';
            Harness.Compiler.compileString(code, 'function type literal', function(result) {
                assert.equal(result.errors.length, 0);
            });
        });
    });
});

