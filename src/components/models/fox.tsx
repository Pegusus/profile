import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

const FoxModel = () => {
  // Load the GLTF model and animations
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const { actions, names } = useAnimations(fox.animations, fox.scene);

  const animationSequence = ["Survey", "Walk", "Run"];

  useEffect(() => {
    let currentIndex = 0;

    const playNextAnimation = () => {
      const currentAnimation = animationSequence[currentIndex];

      // Stop the current animation if it's playing
      const action = actions[currentAnimation];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }

      // Move to the next animation after a certain duration (e.g., 3 seconds for each)
      currentIndex = (currentIndex + 1) % animationSequence.length; // Loop through the sequence
      setTimeout(playNextAnimation, 5000); // Play each animation for 3 seconds
    };

    // Start playing the animations
    playNextAnimation();

    return () => {
      // Cleanup: Stop all animations when the component is unmounted
      Object.values(actions).forEach((action) => action.stop());
    };
  }, [actions]);

  return (
    <>
      <primitive
        object={fox.scene} // Render the GLTF scene
        scale={0.4} // Scale the model
        position={[0, -10, -80]} // Set position in 3D space
        rotation-y={-1} // Apply rotation on Y-axis
      />
    </>
  );
};

export default FoxModel;