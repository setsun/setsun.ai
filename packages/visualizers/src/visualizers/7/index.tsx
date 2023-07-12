import { Stars } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { AudioAnalyser } from "three";

import VisualizerCanvas from "@/components/VisualizerCanvas";
import AttractorsStorm from "./AttractorsStorm";
import Sparks from "./Sparks";

const ATTRACTORS_COLORS = [
  "#fbe555",
  "#fb9224",
  "#f45905",
  "#ffeed0",
  "#feff89",
];

const MainScene = ({
  analyzer,
  isPlaying,
}: {
  analyzer: AudioAnalyser;
  isPlaying: boolean;
}) => (
  <>
    <Stars count={500} />

    <AttractorsStorm
      colors={ATTRACTORS_COLORS}
      count={2000}
      radius={10}
      audioAnalyzer={analyzer}
    />

    <Sparks
      colors={ATTRACTORS_COLORS}
      lineCount={25}
      radius={12.5}
      audioAnalyzer={analyzer}
    />

    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
  </>
);

const Visualizer: React.FC<{ fallback?: React.ReactNode }> = ({ fallback }) => (
  <VisualizerCanvas
    headline="VISUALIZER_07"
    songProps={{
      url: "https://www.setsun.xyz/audio/Burning.mp3",
      name: "Eli & Fur - Burning ft. Camden Cox",
      externalHref:
        "https://soundcloud.com/eliandfur/burning-feat-camden-cox-1",
    }}
    camera={{
      position: [0, 0, -60],
    }}
    fallback={fallback}
  >
    {({ analyzer, isPlaying }) => (
      <MainScene analyzer={analyzer} isPlaying={isPlaying} />
    )}
  </VisualizerCanvas>
);

export default Visualizer;
