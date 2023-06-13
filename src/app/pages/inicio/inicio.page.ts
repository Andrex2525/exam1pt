import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

interface Componente{
 icon: string;
 name: string;
 redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'diamond-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'game-controller-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'logo-ionic',
      name: 'Button',
      redirectTo: '/button'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
