import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Mouse = { x: number; y: number };

function NetworkNodes({ mouse }: { mouse: React.MutableRefObject<Mouse> }) {
  const group = useRef<THREE.Group>(null);
  const count = 28;

  const { positions, links } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
    }
    const links: [number, number][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        if (Math.hypot(dx, dy, dz) < 1.45) links.push([i, j]);
      }
    }
    return { positions, links };
  }, []);

  const linePositions = useMemo(() => {
    const arr = new Float32Array(links.length * 6);
    links.forEach(([a, b], i) => {
      arr[i * 6] = positions[a * 3];
      arr[i * 6 + 1] = positions[a * 3 + 1];
      arr[i * 6 + 2] = positions[a * 3 + 2];
      arr[i * 6 + 3] = positions[b * 3];
      arr[i * 6 + 4] = positions[b * 3 + 1];
      arr[i * 6 + 5] = positions[b * 3 + 2];
    });
    return arr;
  }, [links, positions]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.08 + mouse.current.x * 0.25;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08 + mouse.current.y * 0.15;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#2563EB" size={0.055} sizeAttenuation transparent opacity={0.75} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={links.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#60A5FA" transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

function FloatingShapes({ mouse }: { mouse: React.MutableRefObject<Mouse> }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouse.current.x * 0.35, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouse.current.y * 0.25, 0.05);
    group.current.rotation.z = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.55} floatIntensity={0.8}>
        <mesh position={[-1.35, 0.9, -0.4]}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial color="#18181B" metalness={0.4} roughness={0.35} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1}>
        <mesh position={[1.45, -0.55, 0.2]}>
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#2563EB" metalness={0.5} roughness={0.25} transparent opacity={0.9} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh position={[0.95, 1.15, -0.6]}>
          <torusGeometry args={[0.22, 0.05, 12, 32]} />
          <meshStandardMaterial color="#71717A" metalness={0.45} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
        <mesh position={[-1.1, -1.0, 0.1]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#3B82F6" metalness={0.35} roughness={0.4} transparent opacity={0.85} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles({ mouse }: { mouse: React.MutableRefObject<Mouse> }) {
  const ref = useRef<THREE.Points>(null);
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04 + mouse.current.x * 0.1;
    ref.current.rotation.x = mouse.current.y * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#93C5FD" size={0.02} transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<Mouse> }) {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[3, 4, 2]} intensity={0.85} color="#ffffff" />
      <pointLight position={[-2, 1, 2]} intensity={0.55} color="#60A5FA" />
      <Particles mouse={mouse} />
      <NetworkNodes mouse={mouse} />
      <FloatingShapes mouse={mouse} />
    </>
  );
}

export const HeroScene = () => {
  const mouse = useRef<Mouse>({ x: 0, y: 0 });

  return (
    <div
      className="absolute inset-0"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
};
