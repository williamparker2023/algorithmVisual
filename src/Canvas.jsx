function Canvas(){
    var numList = [];
    var divList= [];
    var num=0;

    var divStyle= {
        color: "gray",
        border: "1px solid gray",
        backgroundColor: "white",
        
    };

    var divStyle2= {
        color: "black",
        border: "1px solid white",
        backgroundColor: "black"
    };

    for (var i=0; i<20; i++){
        num = Math.floor(Math.random() * 100);
        numList.push(num);
        divList.push(<div   key={i} style= 
            {{color: "gray",
            border: "1px solid gray",
            height: Math.floor(Math.random() * 100),
            width: "20px",
            float: "left",
            position: "relative"
            }} />);
    }
    console.log(divList);
    
    return (
        <div>{divList}</div>
    )
}

export default Canvas;