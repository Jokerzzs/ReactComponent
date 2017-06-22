export default class Picture extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.dataItem;  

        return (
            <a href={item.itemhref}>
                <img src={item.src} />
            </a>
        );
    }
}