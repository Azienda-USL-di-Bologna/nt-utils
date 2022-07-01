import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GlobalContextService} from "./utils/global-context.service";
// import {ModuleConfig} from "./module-config";

/**
 * file di inizializzazione del modulo. Fa la funzione di app module in un progetto angular.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    GlobalContextService
  ]
})
export class NTUtilsModule {
  /** Un modulo, per convenzione, si inizializza tramite un metodo statico chiamato forRoot.
   * Al metodo forRoot è possibile passare dei parametri.
   * @returns il modulo inizializzato
   */
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NTUtilsModule,
      /**
       * si definiscono i service del modulo
       */
      providers: [
        GlobalContextService, // definizione del service ExampleService
        // {provide: "config", useValue: config} // in questo modo si definisce la variabile config in modo da porterla iniettare all'interno dei service
      ]
    };
  }
}
