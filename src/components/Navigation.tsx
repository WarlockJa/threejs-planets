"use client";

import {
  hoverAtom,
  writeOnlyScenePositionEarthAtom,
  writeOnlyScenePositionJupiterAtom,
  writeOnlyScenePositionMarsAtom,
  writeOnlyScenePositionMercuryAtom,
  writeOnlyScenePositionNeptuneAtom,
  writeOnlyScenePositionPlutoAtom,
  writeOnlyScenePositionSaturnAtom,
  writeOnlyScenePositionSunAtom,
  writeOnlyScenePositionUranusAtom,
  writeOnlyScenePositionVenusAtom,
} from "@/store/jotai";
import { useAtom } from "jotai";
import ArrowSvg from "./ArrowSvg";
import { useState } from "react";

export default function Navigation() {
  const [, setScenePositionToSun] = useAtom(writeOnlyScenePositionSunAtom);
  const [, setScenePositionToMercury] = useAtom(
    writeOnlyScenePositionMercuryAtom
  );
  const [, setScenePositionToVenus] = useAtom(writeOnlyScenePositionVenusAtom);
  const [, setScenePositionToEarth] = useAtom(writeOnlyScenePositionEarthAtom);
  const [, setScenePositionToMars] = useAtom(writeOnlyScenePositionMarsAtom);
  const [, setScenePositionToJupiter] = useAtom(
    writeOnlyScenePositionJupiterAtom
  );
  const [, setScenePositionToSaturn] = useAtom(
    writeOnlyScenePositionSaturnAtom
  );
  const [, setScenePositionToUranus] = useAtom(
    writeOnlyScenePositionUranusAtom
  );
  const [, setScenePositionToNeptune] = useAtom(
    writeOnlyScenePositionNeptuneAtom
  );
  const [, setScenePositionToPluto] = useAtom(writeOnlyScenePositionPlutoAtom);
  // menu state
  const [menuOpen, setMenuOpen] = useState(false);
  // checking for loading state
  const [hover] = useAtom(hoverAtom);

  return (
    <div
      className={`fixed top-0 left-0 z-10 ${
        hover.planet === "None" && "hidden"
      }`}
    >
      <button
        className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <ArrowSvg
          stroke="white"
          width={"4em"}
          height={"2em"}
          className={`transition-transform ${!menuOpen && "rotate-180"}`}
        />
      </button>
      <nav
        className={`flex flex-col transition-transform ${
          !menuOpen && "-translate-x-32"
        }`}
      >
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToSun();
          }}
        >
          Sun
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToMercury();
          }}
        >
          Mercury
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToVenus();
          }}
        >
          Venus
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToEarth();
          }}
        >
          Earth
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToMars();
          }}
        >
          Mars
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToJupiter();
          }}
        >
          Jupiter
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToSaturn();
          }}
        >
          Saturn
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToUranus();
          }}
        >
          Uranus
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToNeptune();
          }}
        >
          Neptune
        </button>
        <button
          className="border transition-colors border-slate-500 text-slate-400 rounded-full px-4 py-2 opacity-75 hover:opacity-100 hover:text-slate-100"
          onClick={() => {
            setMenuOpen(false);
            setScenePositionToPluto();
          }}
        >
          Pluto
        </button>
      </nav>
    </div>
  );
}
