import { CommonModule } from '@angular/common';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'split'
})
export class SplitPipe implements PipeTransform {
    transform (val: string, params: string[]): string[] {
        const seperator = params[0] ?? ',';
        return val.split(seperator);
    }
}

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform (val: string[] | undefined, params: string): string {

        const seperator = params ?? ' ';

        console.log('JOIN', seperator, val)
        console.log('JOIN', (val ?? []).join(seperator))
        return (val ?? []).join(seperator);
    }
}

// @NgModule({
//   declarations: [
//     JoinPipe,
//     SplitPipe
//   ],
//   imports: [
//     CommonModule,
//   ]
// })
// export class PipesModule { }
