'use client';

import { useRef, useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  SRGBColorSpace,
  ACESFilmicToneMapping,
  AmbientLight,
  PointLight,
  PMREMGenerator,
  SphereGeometry,
  MeshPhysicalMaterial,
  InstancedMesh,
  Object3D,
  Vector2,
  Vector3,
  MathUtils,
  Raycaster,
  Plane,
  Color,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const pointer = new Vector2();
const raycaster = new Raycaster();
const plane = new Plane(new Vector3(0, 0, 1), 0);
const hit = new Vector3();

class BubbleField extends InstancedMesh {
  positions: Vector3[] = [];
  velocities: Vector3[] = [];
  sizes: number[] = [];
  dummy = new Object3D();

  gravity: number;
  friction = 0.992;
  cursorForce = 10;

  constructor(renderer: WebGLRenderer, count: number, gravity: number) {
    const env = new PMREMGenerator(renderer)
      .fromScene(new RoomEnvironment())
      .texture;

    const material = new MeshPhysicalMaterial({
      envMap: env,
      metalness: 0.25,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      transmission: 0.85,
      thickness: 2,
      envMapIntensity: 1.8,
    });

    super(new SphereGeometry(1, 48, 48), material, count);

    this.gravity = gravity;

    // BRIGHT, HAPPY, BUBBLY COLORS
    const colors = [
      '#22d3ee', // cyan-400
      '#38bdf8', // sky-400
      '#60a5fa', // blue-400
      '#a78bfa', // violet-400
      '#e3edf4ff', // near-white glow
    ];

    for (let i = 0; i < count; i++) {
      this.positions.push(
        new Vector3(
          MathUtils.randFloatSpread(11),
          MathUtils.randFloatSpread(7),
          MathUtils.randFloatSpread(4)
        )
      );
      this.velocities.push(new Vector3());
      this.sizes.push(MathUtils.randFloat(0.7, 1.3));
      this.setColorAt(i, new Color(colors[i % colors.length]));
    }

    if (this.instanceColor) this.instanceColor.needsUpdate = true;
  }

  update(delta: number, camera: PerspectiveCamera) {
    raycaster.setFromCamera(pointer, camera);
    camera.getWorldDirection(plane.normal);
    raycaster.ray.intersectPlane(plane, hit);

    for (let i = 0; i < this.count; i++) {
      const pos = this.positions[i];
      const vel = this.velocities[i];

      // floaty gravity
      vel.y -= this.gravity * delta;

      // cursor energy
      const dir = hit.clone().sub(pos);
      const dist = dir.length() + 0.901;
      dir.normalize().multiplyScalar((this.cursorForce * delta) / dist);
      vel.add(dir);

      vel.multiplyScalar(this.friction);
      pos.add(vel);

      this.dummy.position.copy(pos);
      this.dummy.scale.setScalar(this.sizes[i]);
      this.dummy.updateMatrix();
      this.setMatrixAt(i, this.dummy.matrix);
    }

    this.instanceMatrix.needsUpdate = true;
  }
}

export default function Ballpit({
  className = '',
  count = 190,
  gravity = 0.18,
}: {
  className?: string;
  count?: number;
  gravity?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });

    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener('resize', resize);

    const bubbles = new BubbleField(renderer, count, gravity);

    // LIGHTING = LIFE
    scene.add(new AmbientLight(0xffffff, 0.9));

    const key = new PointLight(0xffffff, 160, 100);
    key.position.set(6, 6, 10);
    scene.add(key);

    const rim = new PointLight(0x93c5fd, 120, 100);
    rim.position.set(-6, -4, -8);
    scene.add(rim);

    scene.add(bubbles);

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('pointermove', onPointerMove);

    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const delta = (now - last) / 1000;
      last = now;
      bubbles.update(delta, camera);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
      scene.clear();
    };
  }, [count, gravity]);

  return <canvas ref={canvasRef} className={className} />;
}
