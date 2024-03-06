import { cameraPositionAtom } from "@/store/jotai";
import { useThree } from "@react-three/fiber";
import { useAtom } from "jotai";
import { useEffect } from "react";

interface ISceneControlsProps {
  // sun: any;
  earth: any;
}

export default function SceneControls({ earth }: ISceneControlsProps) {
  const [cameraPosition] = useAtom(cameraPositionAtom);
  const { camera } = useThree();
  useEffect(() => {
    if (!earth.current) return;
    switch (cameraPosition) {
      case 0:
        camera.position.set(0, 0, 100);
        break;
      case 3:
        camera.position.set(150, 0, 0);
        // camera.position.copy(earth.current.position);
        // camera.target.copy(earth.current.position);
        break;

      default:
        camera.position.set(150, 0, 0);
        break;
    }
  }, [cameraPosition]);

  return <group></group>;
}
