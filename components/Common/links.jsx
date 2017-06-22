export default class LinksItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.dataItem;

        return <a href={item.itemhref} className="acs-link-bgcolor" target="_blank" title={item.title}>
            <span className="acs-linkitem-icon"></span>
            <span className="acs-linkitem-title">{item.title}</span>
        </a>
    }
}