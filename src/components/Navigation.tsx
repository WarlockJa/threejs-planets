"use client";

import {
  writeOnlyCameraPositionEarthAtom,
  writeOnlyCameraPositionSunAtom,
} from "@/store/jotai";
import { useAtom } from "jotai";

export default function Navigation() {
  const [, setCameraPositionToSun] = useAtom(writeOnlyCameraPositionSunAtom);
  const [, setCameraPositionToEarth] = useAtom(
    writeOnlyCameraPositionEarthAtom
  );
  return (
    <nav className="fixed top-0 left-0 z-10">
      <button onClick={() => setCameraPositionToSun()}>Sun</button>
      <button onClick={() => setCameraPositionToEarth()}>Earth</button>
    </nav>
  );
}
