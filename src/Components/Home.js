// import React from "react";
// import {HiArrowNarrowRight} from 'react-icons/hi';

// const Home = () => {
//     return (
//         <div name='home' className="w-full h-screen bg-[#0a192f]">
            
//             {/* container */}
//             <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
//                 <p className="text-pink-600 font-bold text-2xl">Hi, My name is</p>
//                 <h1 className="text-4xl sm:text-7xl font-bold text-[#416D19]">Abdullah Tariq</h1>
//                 <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a front-end developer.</h2>
//                 <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a front-end developer passionate about creating user-friendly interfaces. 
//                     My expertise lies in crafting seamless and responsive web experiences. 
//                     I bring ideas to life by blending creativity with technical know-how. 
//                     Proficient in React and Python, I have prior experience in both technologies. 
//                     Let's collaborate to build something amazing! </p>

//                 <div>
//                     <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View work
//                         <span className="group-hover:rotate-90 duration-300">
//                             <HiArrowNarrowRight className="ml-3 hover" />
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {

    const threeBackgroundRef = useRef();

  useEffect(() => {
    // Set up Three.js background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth - 17, window.innerHeight);
    const domElement = renderer.domElement;
    const currentRef = threeBackgroundRef.current;
    currentRef.appendChild(domElement);

    const particles = new THREE.Group();
    scene.add(particles);

    for (let i = 0; i < 2000; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.02, 8, 8),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xffffff,
          emissiveIntensity: 0.5,
        })
      );

      particle.position.x = (Math.random() - 0.5) * 20;
      particle.position.y = (Math.random() - 0.5) * 20;
      particle.position.z = (Math.random() - 0.5) * 20;

      particles.add(particle);
    }

    scene.background = new THREE.Color(0x0a192f); // Background color

    scene.add(new THREE.AmbientLight(0x404040));
    const light = new THREE.PointLight(0xffffff, 1);
    scene.add(light);

    camera.position.z = 5;

    window.addEventListener("resize", () => {
      camera.aspect = (window.innerWidth - 17) / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth - 17, window.innerHeight);
    });

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
        currentRef.removeChild(domElement);
    };
  }, []);

    return (
        <div name='home' ref={threeBackgroundRef} className="w-full h-screen bg-[#0a192f]">
            
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600 font-bold text-2xl">Hi, My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#416D19]">Abdullah Tariq</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a front-end developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a front-end developer passionate about creating user-friendly interfaces. 
                    My expertise lies in crafting seamless and responsive web experiences. 
                    I bring ideas to life by blending creativity with technical know-how. 
                    Proficient in React and Python, I have prior experience in both technologies. 
                    Let's collaborate to build something amazing! </p>

                <div>
                    <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 hover" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
