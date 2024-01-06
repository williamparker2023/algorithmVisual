

function Canvas(){
    


    var count= 10;
    var numList = [];
    var divList= [];
    var num=0;



    for (var i=0; i< count; i++){
        num = Math.floor(Math.random() * 60);
        numList.push(num);
        var top = 65-num;
        divList.push(<div   key={i} style= 
            {{color: "gray",
            color: "white",
            boxShadow: "inset 0px 0px 0px 3px white",
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
    
    return (
        <div>{divList}</div>
    )
}

export default Canvas;