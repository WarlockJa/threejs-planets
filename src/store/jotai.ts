import { atom } from "jotai";

export const cameraPositionAtom = atom(3);
export const writeOnlyCameraPositionSunAtom = atom(null, (get, set) => {
  set(cameraPositionAtom, 0);
});
export const writeOnlyCameraPositionEarthAtom = atom(null, (get, set) => {
  set(cameraPositionAtom, 3);
});
