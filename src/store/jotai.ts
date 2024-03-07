import * as THREE from "three";
import { atom } from "jotai";

interface ICameraPosition {
  position: THREE.Vector3;
  cameraPosition: THREE.Vector3;
}

export const scenePositionAtom = atom<ICameraPosition>({
  position: new THREE.Vector3(-150, 0, 0),
  cameraPosition: new THREE.Vector3(0, 0, 2),
});
export const writeOnlyScenePositionSunAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(0, 0, 0),
    cameraPosition: new THREE.Vector3(0, 0, 100),
  });
});
export const writeOnlyScenePositionMercuryAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-69, 0, -10),
    cameraPosition: new THREE.Vector3(0, 0, 2),
  });
});
export const writeOnlyScenePositionVenusAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-123, 0, -8),
    cameraPosition: new THREE.Vector3(-2, 0, 2),
  });
});
export const writeOnlyScenePositionEarthAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-150, 0, 0),
    cameraPosition: new THREE.Vector3(0, 0, 2),
  });
});
export const writeOnlyScenePositionMarsAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-180, 0, -6),
    cameraPosition: new THREE.Vector3(-1, 0, 1),
  });
});
export const writeOnlyScenePositionJupiterAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-230, 0, -4),
    cameraPosition: new THREE.Vector3(-10, 0, 20),
  });
});
export const writeOnlyScenePositionSaturnAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-280, 0, -70),
    cameraPosition: new THREE.Vector3(-20, 7, 25),
  });
});
export const writeOnlyScenePositionUranusAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-330, 0, -50),
    cameraPosition: new THREE.Vector3(-5, 7, 15),
  });
});
export const writeOnlyScenePositionNeptuneAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-380, 0, 22),
    cameraPosition: new THREE.Vector3(-5, 0, 10),
  });
});
export const writeOnlyScenePositionPlutoAtom = atom(null, (get, set) => {
  set(scenePositionAtom, {
    position: new THREE.Vector3(-500, 0, -33),
    cameraPosition: new THREE.Vector3(-0.5, 0, 0.5),
  });
});

// hover state
export const hoverAtom = atom<{
  isHover: boolean;
  isClicked: boolean;
  planet: TPlanetsLiteral;
}>({
  isHover: false,
  isClicked: false,
  planet: "Earth",
});
export const writeOnlyHoverSunAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Sun" });
});
export const writeOnlyHoverMercuryAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Mercury" });
});
export const writeOnlyHoverVenusAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Venus" });
});
export const writeOnlyHoverEarthAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Earth" });
});
export const writeOnlyHoverMarsAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Mars" });
});
export const writeOnlyHoverJupiterAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Jupiter" });
});
export const writeOnlyHoverSaturnAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Saturn" });
});
export const writeOnlyHoverUranusAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Uranus" });
});
export const writeOnlyHoverNeptuneAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Neptune" });
});
export const writeOnlyHoverPlutoAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Pluto" });
});
export const writeOnlyHoverMoonAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: true, isClicked: false, planet: "Moon" });
});
export const writeOnlyHoverFalseAtom = atom(null, (get, set) => {
  set(hoverAtom, { isHover: false, isClicked: false, planet: "Earth" });
});
