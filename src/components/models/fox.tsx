import { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const FoxModel = () => {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const { actions, names } = useAnimations(fox.animations, fox.scene);

  const animationSequence = ["Survey", "Walk", "Run"];

  useEffect(() => {
    let currentIndex = 0;

    const playNextAnimation = () => {
      const currentAnimation = animationSequence[currentIndex];
      const action = actions[currentAnimation];
      if (action) {
        action.reset().fadeIn(0.5).play();
      }

      currentIndex = (currentIndex + 1) % animationSequence.length;
      setTimeout(playNextAnimation, 5000);
    };

    playNextAnimation();

    return () => {
      Object.values(actions).forEach((action) => action.stop());
    };
  }, [actions]);

  return (
    <>
      <primitive
        object={fox.scene}
        scale={0.4}
        position={[0, -10, -80]}
        rotation-y={-1}
      />
    </>
  );
};

export default FoxModel;