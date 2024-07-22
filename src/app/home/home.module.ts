import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { HomeTrustedBusinessesComponent } from './home-trusted-businesses/home-trusted-businesses.component';
import { HomeSupportedBrandedComponent } from './home-supported-branded/home-supported-branded.component';
import { HomeGlobalBrandComponent } from './home-global-brand/home-global-brand.component';
import { HomeCtaComponent } from './home-cta/home-cta.component';

@NgModule({
  declarations: [HomeComponent, HomeHeroComponent, HomeDetailsComponent, HomeTrustedBusinessesComponent, HomeSupportedBrandedComponent, HomeGlobalBrandComponent, HomeCtaComponent],
  imports: [CommonModule],
  exports: [HomeComponent, HomeHeroComponent],
})
export class HomeModule {}
