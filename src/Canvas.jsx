
function Canvas(){
    

    var count= 20;
    var numList = [];
    var divList= [];
    var num=0;


    for (var i=0; i< count; i++){
        num = Math.floor(Math.random() * 60)+1;
        numList.push(num);
        var top = 65-num;

        var r = 255-num*4;
        var g = num*4;
        var b = 0;

        divList.push(<div   key={i} style= 
            {{
            color: "white",
            boxShadow: "inset 0px 0px 0px 3px rgb(" + r + "," + g + "," + b + ")",
            height: num + 'vh',
            width: (80/count)  + "vw",
            float: "left",
            position: "relative",
            top: "auto",
            display: "inLineBlock",
            marginTop: (top + "vh")
            }} />);
    }

    // for (var i = 1; i < numList.length; i++) {
    //     var currentElement = numList[i];
    //     var temp1 = divList[i];

    //     var lastIndex = i - 1;
    
    //     while (lastIndex >= 0 && numList[lastIndex] > currentElement) {
    //       numList[lastIndex + 1] = numList[lastIndex];
    //       divList[lastIndex + 1] = divList[lastIndex];

    //       lastIndex--;
    //     }
    //     numList[lastIndex + 1] = currentElement;
    //     divList[lastIndex + 1] = temp1;
        
    // }
    // console.log(divList[0]);

    function insertionSort(){
        //This function will sort by the insertion method
        for (var j = 1; j < numList.length; j++) {
                var currentElement = numList[j];
                var temp1 = divList[j];
        
                var lastIndex = j - 1;
            
                while (lastIndex >= 0 && numList[lastIndex] > currentElement) {
                  numList[lastIndex + 1] = numList[lastIndex];
                  divList[lastIndex + 1] = divList[lastIndex];
        
                  lastIndex--;
                }
                numList[lastIndex + 1] = currentElement;
                divList[lastIndex + 1] = temp1;
                
            }
            for (var i=0; i< count; i++){
                num = 
                numList.push(num);
                var top = 65-num;
        
                var r = 255-num*4;
                var g = num*4;
                var b = 0;
        
                divList.push(<div   key={i} style= 
                    {{
                    color: "white",
                    boxShadow: "inset 0px 0px 0px 3px rgb(" + r + "," + g + "," + b + ")",
                    height: num + 'vh',
                    width: (80/count)  + "vw",
                    float: "left",
                    position: "relative",
                    top: "auto",
                    display: "inLineBlock",
                    marginTop: (top + "vh")
                    }} />);
            }
        console.log(divList);        
    }   
    
    return (
        
    <div>
        <button onClick={insertionSort}>Insertion Sort</button>
        <div id = "container">
            
              
              {divList}
            
        </div>
    </div>
    )
}



export default Canvas;