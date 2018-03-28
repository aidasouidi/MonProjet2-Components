import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable() // l'injecteur de angular va l'injacter : gérer par l'injecteur de dépendance
export class ProductsService {

  constructor() { }
  getAllProducts(): Produit[] {
    return [
      {code: '**** From Service - P100', nom: 'Café', prixUnitaire: 1200.5},
      {code: 'P200', nom: 'Thé', prixUnitaire: 1000},
      {code: 'P300', nom: 'Jus', prixUnitaire: 3500.5},
      {code: 'P400', nom: 'Coca Cola', prixUnitaire: 3500.5}
    ];
  }
}
