import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private cvs: HTMLCanvasElement | undefined = undefined;

  private renderer: THREE.WebGLRenderer | undefined = undefined;

  onUpdate (  ): void {
      // do nothing

  }

  onResize ( width: number, height: number ): void {
      // do nothing
      this.renderer?.setSize(width, height );

  }

  onInit ( cvs: HTMLCanvasElement ): void {

    const size = 300;
    this.cvs = cvs;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, size / size, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({ canvas: cvs });
    this.renderer.setSize( size, size );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate =  (): void => {
      requestAnimationFrame( animate );
      this.renderer?.render( scene, camera );
    }
    animate();

  }

  // animate (): void {
  //   requestAnimationFrame( animate );
  //   this.renderer.render( scene, camera );
  // }
  // animate();

  onDestroy  (  ): void {
      // do nothing

  }

}
