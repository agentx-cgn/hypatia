import { Injectable } from '@angular/core';
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

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
    console.log('Sim.resize', width, height);
    this.renderer?.setSize( width, height );

  }

  onInit ( cvs: HTMLCanvasElement ): void {

    if ( !WebGL.isWebGL2Available() ) {
      // document.body.appendChild( WebGL.getWebGL2ErrorMessage());
      console.error(WebGL.getWebGL2ErrorMessage())
    }

    const size = 300;
    this.cvs = cvs;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, size / size, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({ canvas: cvs, antialias: true });
    this.renderer.setSize( size, size );
    this.renderer.setPixelRatio( window.devicePixelRatio );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0xAA8866 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    scene.background = new THREE.Color(255, 255, 255);

    camera.position.z = 5;

    const animate =  (): void => {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

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
