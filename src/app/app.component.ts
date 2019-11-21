import { Component } from '@angular/core';

/**
 * Définition du component
 * 
 * @Component({
 *  selector: Nom du sélecteur HTML
 *  templateUrl: Chemin du template HTML
 *  styleUrls: Liste des fichiers de style à utiliser pour ce component
 * })
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my awesome app';
  isAuth = true;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  /**
   * Voir différence entre constructor (syntaxe ES6) et ngOnInit,
   * une fonction propre au lifecycle des components angular
   * 
   * http://pierreterrat.com/angular-ngoninit-et-constructor/
   * https://angular.io/guide/lifecycle-hooks
   */
  constructor() {
    setTimeout(
      () => {
        this.isAuth = false;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout');
  }
}

