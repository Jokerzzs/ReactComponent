export default class SliderItemFrame extends React.Component {
    constructor(props){
        super(props);
    }

    initData(data){
        let finalData = [],totalCount=0,aveCount=this.props.countAve;
        totalCount=Math.ceil(data.length/aveCount);
        for(var i=0;i<totalCount;i++){
            var tempArr =[];
            for(var j=i*aveCount;j<(i+1)*aveCount;j++){
                if(typeof data[j] ==='object' )
                {tempArr.push(data[j]);}
            }
            finalData[i] = tempArr;
        }
        return finalData;
    }

    render(){
        let {countAve,colleData,left, speed, nowLocal,isWholeCell} = this.props;
        let tempData = this.initData(colleData);
        let count = Math.ceil(colleData.length/countAve);
        let width = 100 / count + '%';
        let cellWidth = isWholeCell?(-100):(-(100/countAve));
        let liArrary = tempData.map((items,index)=>{
            return <li key={'sliderli'+index} style={{ width: width }}>
                {items.map((item)=>{
                    return React.cloneElement(this.props.children, {
                        dataItem:item,
                        aveCount:countAve
                    });
                })}
            </li>
        });

        return (
            <ul style={{
                left: cellWidth * nowLocal + "%",
                transitionDuration: speed + "s",
                width: count * 100 + "%"
            }}>
                {liArrary}
            </ul>
        );
    }
}
