"use client";
import { hoverAtom, writeOnlyHoverFalseAtom } from "@/store/jotai";
import { useAtom } from "jotai";

const PLANET_DATA = {
  None: "",
  Sun: "It's not actually yellow! The Sun emits a broad spectrum of light, and our eyes perceive it as yellow due to how our brains interpret the mix of colors.",
  Mercury:
    'Despite being closest to the Sun, it has a slower rotation period than any other planet, taking 58 Earth days to spin on its axis. This means a single "day" on Mercury is longer than its year (88 Earth days).',
  Venus:
    'Nicknamed Earth\'s "twin" due to its similar size and mass, Venus has a surface temperature hot enough to melt lead (almost 900°F).',
  Earth: "You are here",
  Mars: 'The "Red Planet" gets its color from iron oxide (rust) on its surface. It also has the tallest mountain in the solar system, Olympus Mons, which is more than twice the height of Mount Everest.',
  Jupiter:
    "The largest planet in our solar system, Jupiter is so massive it could hold all the other planets combined over 1,300 times!",
  Saturn:
    "Known for its iconic rings, made up of billions of ice particles and dust. These rings are incredibly wide, stretching out much farther than the planet's diameter.",
  Uranus:
    "Unlike most planets that spin on an upright axis, Uranus is tilted on its side, almost like rolling on the ground. This makes it appear to spin on its side, completing a full rotation every 17 hours.",
  Neptune:
    "The farthest planet from the Sun, Neptune has the strongest winds in the solar system, reaching speeds of over 1,100 miles per hour!",
  Pluto: "It's still a planet to me!",
  Moon: "Due to the tidal forces between the Earth and the Moon, Earth's rotation is slowing down ever so slightly. This, in turn, causes the Moon to gain a little bit of momentum and drift away from our planet at a rate of about 3.8 centimeters (1.5 inches) every year.",
};
export default function ModalInfo() {
  const [hover] = useAtom(hoverAtom);
  const [, setHoverFalse] = useAtom(writeOnlyHoverFalseAtom);

  return (
    <div
      className={`fixed left-0 top-0 right-0 p-4 bottom-0 bg-slate-900 bg-opacity-70  border-8 border-teal-100 rounded-xl flex items-center justify-center z-20 ${
        hover.isClicked && hover.isHover ? null : "hidden"
      }`}
      onClick={(e) => {
        e.stopPropagation();
        setHoverFalse();
      }}
    >
      <div className="max-w-lg text-cyan-50 text-3xl text-center">
        {PLANET_DATA[hover.planet]}
      </div>
    </div>
  );
}
