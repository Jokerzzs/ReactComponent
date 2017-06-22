export default class NewItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.dataItem,aveCount=this.props.aveCount;
        let itemHeight = 100/aveCount+'%';
        return <div style={{height:itemHeight}}>
                <div className='newContent'>
                    <img src={item.src} />
                </div>
                <div className='newContent'>
                    <a href={item.href} title={item.value}>{item.value}</a>
                </div>
                <div className='newContent'>
                    <div className='acs-pic-clock'></div>
                    <span >{item.date}</span>
                </div>
            </div>
    }
}