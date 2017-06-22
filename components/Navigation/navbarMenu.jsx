
export default class NavbarMenuList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        let {data} = this.props;

        let liArrary = data.map((item,index)=>{
            return React.cloneElement(this.props.children, {
                menuData:item,
                hasGrandChild:item.hasGrandChild
            });
        });


        return (
                <div className="acs-navbar">
                   {liArrary}
                </div>
            )
    }

}
