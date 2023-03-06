import { useState } from "react";
import { Stage, Layer, Rect, Text, Ellipse } from "react-konva";
import Front from './Front'

const Layers = (props) => {
  const [topLayerFill, setTopLayerFill] = useState("white");
  const [midLayerFill, setMidLayerFill] = useState("white");
  const [botLayerFill, setBotLayerFill] = useState("white");
  const [layerOpacity, setLayerOpacity] = useState({front: 0.5, tools: 0.5, back:0.5})

  const handleTopHover = () => {
    setTopLayerFill("indigo");
    setLayerOpacity(prevState => ({
      ...prevState,
      front: 0.8
    }))
    props.setFront(true)
  };
  const handleMidHover = () => {
    setMidLayerFill("indigo");
    setLayerOpacity(prevState => ({
      ...prevState,
      tools: 0.8
    }))
    props.setTool(true)
  };
  const handleBotHover = () => {
    setBotLayerFill("indigo");
    setLayerOpacity(prevState => ({
      ...prevState,
      back: 0.8
    }))
    props.setBack(true)
  };

  return (
      <Stage width={window.innerWidth/1.8} height={window.innerHeight / 1.5}>
        <Layer>
          <Ellipse
            x={window.innerWidth / 2 - 0.32*window.innerWidth}
            y={window.innerHeight / 4 + 0.1*window.innerWidth}
            radiusX={0.1*window.innerWidth}
            radiusY={0.035*window.innerWidth}
            fill={botLayerFill}
            shadowBlur={5}
            stroke={"white"}
            strokeWidth={4}
            onPointerOver={handleBotHover}
            onClick={handleBotHover}
            opacity={layerOpacity.back}
            onPointerLeave={() => {setBotLayerFill("white");  setLayerOpacity(prevState => ({
              ...prevState,
              back: 0.5
            })); props.setBack(false)}}
          />
          <Text
            text={"Back-End"}
            x={window.innerWidth / 2 - 0.2*window.innerWidth}
            y={window.innerHeight / 4 + 0.09*window.innerWidth}
            fontSize={window.innerWidth*0.025}
            fill={"white"}
          />
          <Ellipse
            x={window.innerWidth / 2 - 0.32*window.innerWidth}
            y={window.innerHeight / 4 + 0.05*window.innerWidth}
            radiusX={0.1*window.innerWidth}
            radiusY={0.035*window.innerWidth}
            fill={midLayerFill}
            shadowBlur={5}
            stroke={"white"}
            strokeWidth={4}
            onPointerOver={handleMidHover}
            onClick={handleMidHover}
            onPointerOut={() => {setMidLayerFill("white");  setLayerOpacity(prevState => ({
              ...prevState,
              tools: 0.5
            })); props.setTool(false)}}
            opacity={layerOpacity.tools}
          />
          <Text
            text={"Tools"}
            x={window.innerWidth / 2 - 0.2*window.innerWidth}
            y={window.innerHeight / 4 + 0.04*window.innerWidth}
            fontSize={window.innerWidth*0.025}
            fill={"white"}
          />
          <Ellipse
            x={window.innerWidth / 2 - 0.32*window.innerWidth}
            y={window.innerHeight / 4}
            radiusX={0.1*window.innerWidth}
            radiusY={0.035*window.innerWidth}
            fill={topLayerFill}
            shadowBlur={5}
            stroke={"white"}
            strokeWidth={4}
            onPointerOver={handleTopHover}
            onClick={handleTopHover}
            onPointerOut={() => {setTopLayerFill("white");  setLayerOpacity(prevState => ({
              ...prevState,
              front: 0.5
            })); props.setFront(false)}}
            opacity={layerOpacity.front}
          />
          <Text
            text={"Front-end"}
            x={window.innerWidth / 2 - 0.2*window.innerWidth}
            y={window.innerHeight / 4 - 0.01*window.innerWidth}
            fontSize={window.innerWidth*0.025}
            fill={"white"}
          />
        </Layer>
      </Stage>
  );
};

export default Layers;
