import { Component } from "@angular/core";

@Component( {
    selector: 'app-header',
    standalone: true, //(default on Angular 19+)
    // template: '<h1>EasyTask</h1>',
    templateUrl: './header.component.html',
    // styles: ['h1 { color: red }'],
    styleUrl: './header.component.css'
})
export class HeaderComponent {}