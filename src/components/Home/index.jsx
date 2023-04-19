import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "lightblue",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "500px", padding: "50px 0" }}>
            <div>
                magnifyglass
                <input/>
                rightarrow
            </div>
            <div>
                <button>Sort(down-chevron)</button>
                <button>Filter(up-chevron)</button>
            </div>
            <div>
                <div style={{display:"flex"}}>
                    <div>(i)</div>
                    <h3>Prepare for job interview</h3>
                    <button>edit</button>
                    <button>complete</button>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                        <div style={{display:"flex"}}>
                            <div>(i)</div>
                            <h4>Priority: High (8/10)</h4>
                        </div>
                        <div style={{display:"flex"}}>
                            <div>(i)</div>
                            <h4>Complexity: Moderate (5/10)</h4>
                        </div>
                        <div style={{display:"flex"}}>
                            <h5>tag1</h5><h5>tag1</h5><h5>tag1</h5>
                        </div>
                    </div>
                    <div>
                        progress circle
                    </div>
                </div>
            {/* 
                (icon) Due Date: Tomorrow, 9:00 AM ====== (progress circle with percentage)
                (icon) Priority: High (8/10)
                (icon) Complexity: Moderate (5/10)
                (tag1) (tag2) (tag3)
            */}
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
