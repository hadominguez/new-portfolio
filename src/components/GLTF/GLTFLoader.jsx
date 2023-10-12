import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';


const GLTFViewer = (props) => {
  //export function Model(props) {
  const { nodes, materials } = useGLTF('model/yo.gltf')
  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <Canvas >
        <PerspectiveCamera makeDefault position={[2,2,-2]}/>
        <ambientLight color={'#ffffff'} intensity={3} />
        <directionalLight position={[10,10,-10]} intensity={5}/>
        <Suspense fallback={null}>
          <group {...props} dispose={null}>
            <group position={[0, 1.5, 0]} rotation={[-0.035, 0, 0]}>
              <mesh geometry={nodes.Head_1.geometry} material={nodes.Head_1.material} position={[0, -1.5, 0]} />
              <mesh geometry={nodes.Hat_Layer.geometry} material={nodes.Hat_Layer.material} position={[0, -1.5, 0]} />
            </group>
            <group position={[0, 1.5, 0]}>
              <mesh geometry={nodes.Body_1.geometry} material={nodes.Body_1.material} position={[0, -1.5, 0]} />
              <mesh geometry={nodes.Body_Layer.geometry} material={nodes.Body_Layer.material} position={[0, -1.5, 0]} />
            </group>
            <group position={[0.313, 1.375, 0]} rotation={[-0.611, 0, 0]}>
              <mesh geometry={nodes.Right_Arm.geometry} material={nodes.Right_Arm.material} position={[-0.313, -1.375, 0]} />
              <mesh geometry={nodes.Right_Arm_Layer.geometry} material={nodes.Right_Arm_Layer.material} position={[-0.313, -1.375, 0]} />
            </group>
            <group position={[-0.313, 1.375, 0]} rotation={[0.611, 0, 0]}>
              <mesh geometry={nodes.Left_Arm.geometry} material={nodes.Left_Arm.material} position={[0.313, -1.375, 0]} />
              <mesh geometry={nodes.Left_Arm_Layer.geometry} material={nodes.Left_Arm_Layer.material} position={[0.313, -1.375, 0]} />
            </group>
            <group position={[0.119, 0.75, 0]} rotation={[0.733, 0.023, 0.026]}>
              <mesh geometry={nodes.Right_Leg.geometry} material={nodes.Right_Leg.material} position={[-0.119, -0.75, 0]} />
              <mesh geometry={nodes.Right_Leg_Layer.geometry} material={nodes.Right_Leg_Layer.material} position={[-0.119, -0.75, 0]} />
            </group>
            <group position={[-0.119, 0.75, 0]} rotation={[-0.733, 0.023, -0.026]}>
              <mesh geometry={nodes.Left_Leg.geometry} material={nodes.Left_Leg.material} position={[0.119, -0.75, 0]} />
              <mesh geometry={nodes.Left_Leg_Layer.geometry} material={nodes.Left_Leg_Layer.material} position={[0.119, -0.75, 0]} />
            </group>
          </group>
        </Suspense>
        <OrbitControls target={[0,1,0]} autoRotate={true}/>
      </Canvas>
    </div>
  )
}

useGLTF.preload('model/yo.gltf')


export default GLTFViewer;