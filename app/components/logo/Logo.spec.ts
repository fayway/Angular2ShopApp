import {LogoComponent} from './Logo';

import {
    expect, it, async, inject
} from '@angular/core/testing';

import {TestComponentBuilder}   from '@angular/compiler/testing';
import {By}                     from '@angular/platform-browser';

describe('LogoComponent with new', function () {
    it('should instantiate component', () => {
        expect(new LogoComponent()).toBeDefined();
    });
});

describe('LogoComponent with TCB', function () {

    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            tcb.createAsync(LogoComponent).then(fixture => {
                expect(fixture.componentInstance instanceof LogoComponent).toBe(true, 'should create LogoComponent');
            });
        })));

    it('should have expected <img> tag',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            tcb.createAsync(LogoComponent).then(fixture => {
                fixture.detectChanges();  //resolve a binding
                let img = fixture.debugElement.query(By.css('img')).nativeElement;
                expect(img.getAttribute('src')).toMatch(/.+logo.jpg$/, '<h1> should have a logo.jpg as the img src');
            });

        })));
});


