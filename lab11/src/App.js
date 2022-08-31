import './App.css';
import Hierarchy from "./Hierarchy.js";

function App() {
  const hierarchy = [{
    id: 1,
    name: "folder1",
    icon: "/icons/folder-solid.svg",
    childs: [{
      id: 1,
      name: "folder2",
      icon: "/icons/folder-solid.svg",
      onClick: function(id) {
        console.log(id);
      },
      childs: [{
        id: "1",
        name: "image.png",
        icon: "/icons/file-image-solid.svg",
        onClick: function(id) {
          console.log(id);
        }
      }]
    }]
  }, {
    id: 3,
    name: "folder3",
    icon: "/icons/folder-solid.svg",
    childs: [{
      id: 4,
      name: "folder4",
      icon: "/icons/folder-solid.svg",
      childs: [{
        id: 5,
        name: "text.txt",
        icon: "/icons/file-alt-solid.svg",
        onClick: function(id) {
          console.log(id);
        }
      }]
    }]
  }];
  
  return (
    <div className="App">
      <Hierarchy tree={hierarchy}/>
    </div>
  );
}

export default App;
