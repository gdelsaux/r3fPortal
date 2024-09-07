import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Suspense } from 'react'
import Loader from './Loader.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Suspense fallback={<Loader />}>
            <Canvas
                flat
                camera={ {
                    fov: 45,
                    near: 0.1,
                    far: 50,
                    position: [ 1, 2, 6 ]
                } }
            >
                <color args={ [ '#030202' ] } attach="background" />
                <Experience />
            </Canvas>
        </Suspense>
    </>
)