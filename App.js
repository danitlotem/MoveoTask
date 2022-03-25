import "./index";
import AudioChannel from "./Components/AudioChannel";
import BottomButtons from "./Components/BottomButtons";
import AudioPlayer from './Components/AudioPlayer'
import tracks from './Tracks'


const App = () =>
{
  //list of colors 
  const color_list = [
    {
      id: 0,
      color: "#4CA9DD",
    },
    {
      id: 1,
      color: "#70B8E0",
    },
    {
      id: 2,
      color: "#86C4E7",
    },
    {
      id: 3,
      color: "#9CD0EE",
    },
    {
      id: 4,
      color: "#9CDFEE",
    },
    {
      id: 5,
      color: "#87DEF1",
    },
    {
      id: 6,
      color: "#6AD2E9",
    },
    {
      id: 7,
      color: "#63C4D9",
    },
  ]

  return (

    <div className="mainContainer" >
      <AudioPlayer id={ color_list.id } /> {/*aodio player component */}
      <div >
        {
          //turn color_list into list of audio cannels
          color_list.map((item, index) => { return <AudioChannel color={ item.color } id={ item.id } name={ tracks[index].name } key={ item.id } /> })
        }
      </div>
      <BottomButtons /> {/*[play,stop,loop] component */}
    </div >
  );
}

export default App;
