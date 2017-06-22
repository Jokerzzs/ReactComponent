
import NavTitleBtn from './navbarTitleBtn.jsx';
import NavLink from './navbarLink.jsx';

export default class NavbarItemTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ulWidth:'402px'
        };
    }

    menushow() {
        this.setState({
            open: true
        });
    }

    menuhidden() {
        this.setState({
            open: false,
        });
    }



    render() {
        let {menuData,hasGrandChild} = this.props;
        let minWidth = Math.ceil(menuData.Items.length / 9) * 400 + 'px';
        let maxCount = 9;
        let itemNodes = [];
        for (let i = 0, len = menuData.Items.length; i < len; i += maxCount) {
            itemNodes.push(menuData.Items.slice(i, i + maxCount));
        }
 
        let secondMenu = (<ul onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)} className={"acs-navbaritem-second" + (this.state.open?" acs-navbaritem-OpenBlock":" acs-navbaritem-Close")} 
        style={{minWidth: minWidth }}>
            {menuData.Items.map((item, index) => {
                 var content = hasGrandChild?(item.Items.map((els, index) => {
                            return (<NavLink itemLink={els} classNames={"acs-itemlink"}  key={"Link"+index} itemNum={0} ></NavLink>);
                        })):null;
                
                return (<div style={{ "display": "inline-block" }}>
                    <a href={item.ItemHref === ''?'javascript:void(0);':item.ItemHref} className="acs-itemlink" style={{cursor:item.ItemHref === ''?'default':'pointer',"fontWeight":"800"}}  key={index}>{item.Title}</a>
                   {content}
                </div>)
            })}
        </ul>);

        let secondMenuC = (<ul onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)} className={"acs-navbaritem-second" + (this.state.open?" acs-navbaritem-OpenBlock":" acs-navbaritem-Close")}  
        style={{minWidth: minWidth }}>
            {itemNodes.map((item, index) => {
                return (<div style={{ "flexDirection": "column" }}>
                    {item.map((els, index) => {
                        return (<NavLink itemLink={els} classNames={"acs-itemlink"}  key={"Link"+index} itemNum={0} ></NavLink>)
                    })}
                </div>)
            })}
        </ul>);
        secondMenu = hasGrandChild ? secondMenu : secondMenuC;
        secondMenu = menuData.hasChild?secondMenu:null;
        

        return (
            <div className="acs-navbar-item" style={{cursor:'default'}} onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)}>
                <NavTitleBtn classname={"acs-navbaritem-titlebtn"} isSecond={false} name={menuData.Title} open={this.state.open} hasChild={menuData.hasChild} ItemHref={menuData.ItemHref} />
                {secondMenu}
            </div>)
    }
}
