import { useState } from "react";
import data from "./data";
import "./Accordin.css";


function Accord() {
    const [selected, setSelected] = useState(null);
    
  function handleSingleSelection(getCurrentId) {
      // if Header is already selected set it to null(close) else select it
      if (getCurrentId === selected) {
      setSelected(null);
      
    } else {
      setSelected(getCurrentId);
      
    }

    // setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <>
    <div className="main-div">
      <div className="accordin"> {/*This div contain all header(item) */}
        {data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item"onClick={() => handleSingleSelection(dataItem.id)}
             style={{backgroundColor:selected === dataItem.id ? 'white' : '#fff4ce'}} > {/*item containing question and answer */}
              <div className="innerdiv">
                <div
                  
                  className="title"
                >
                  {dataItem.question}
                </div>
                <i className={`icon ri-${selected === dataItem.id ? "close-fill" : "add-line"}`}></i>
                
              </div>
              {selected === dataItem.id ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
      </div>
    </>
  );
}
export default Accord;
