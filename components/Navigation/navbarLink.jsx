export default class NavbarLink extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        let {itemLink,classNames,itemNum} = this.props;
        let linkHref='',linkCursor='',styleFloat='';
        linkHref = itemLink.ItemHref === ''?'javascript:void(0);':itemLink.ItemHref;
        linkCursor = itemLink.ItemHref === ''?'default':'pointer';
        styleFloat = itemNum>7?'right':'none';

    return(
        <a href={linkHref} className={classNames} style={{cursor:linkCursor,float:styleFloat}}>
            <span className={"acs-itemlink-icon"}></span>{itemLink.Title}
        </a>)
    }
}
