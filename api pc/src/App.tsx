import React, { useState } from "react";
import { getPost } from "./services/json.services"
import Click from "./components/click";
import Showuser from "./components/Showuser";
import InputData from "./components/InputData";


type IPost = {
  id: number;
  userId: number;
  title: string;
  // body: string;

}
function App() {
  const [appText, setAppText] = useState("Display Album");
  const [localPosts, setPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState([{}])
  // const[show, setShow]=useState(false);
  // const[index,setIndex]=useState();
  const [selectUser, setSelecterUser] = useState(-1);
  const [title, setTitle] = useState("")

  const handleChangeText = () => {
    //setAppText("Updated by button click");
    const posts = getPost().then(function (response) {
      setPosts(response);
    });
    console.log(localPosts)
  };
  const getAlbumData = (localPosts: any) => {

    setUser((preState) => {

      return [...preState, localPosts];

    });

  };
  const AddData = (album: any) => {
    setPosts([...localPosts, album])
  }
  return (
    <div className="text-center bg-gray-600 ">
      <div className="py-10 text-2xl font-bold bg-white text-red-500 ">{appText}</div>
      <Click onClick={handleChangeText} />
      <div><InputData onSaveEmployeeData={getAlbumData} AddData={(album: any) => AddData(album)}></InputData>
      <div className="flex justify-center "><Showuser albums={localPosts[(selectUser - 1)]} /></div>
        <div className="text-center  font-bold">
          
          
          {localPosts.map((post, index) => (
            <div className="grid grid-cols-4 gap-10">
              <div className="border border-b-0 bg-gray-300 px-5 py-6" >
                <button onClick={() => { setSelecterUser(post.id) }} className=" text-black-500 hover:text-black-700 focus:outline-none font-bold" type="button" > {post.id} </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;