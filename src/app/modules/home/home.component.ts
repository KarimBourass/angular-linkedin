import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="max-w-4xl lg:max-w-6xl mx-auto flex flex-col md:flex-row gap-x-6 mt-5 md:first-line:px-3">
      <home-user-info class="w-full hidden md:block md:w-56"></home-user-info>
      <home-posts class="flex-grow md:max-w-lg xl:max-w-xl"></home-posts>
      <home-user-suggestion class="hidden lg:flex w-80 rounded-md"></home-user-suggestion>
    </div>
  `,
})
export class HomeComponent {}
