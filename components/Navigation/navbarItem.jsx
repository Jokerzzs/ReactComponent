import NavTitleBtn from './navbarTitleBtn.jsx';
import NavLink from './navbarLink.jsx';

export default class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ulWidth:'402px'
        };
    }

    menushow(isSecond) {
        if (!isSecond) {
            this.setState({
                open: true
            });
        }
        else {
            this.setState({
                ulWidth:'800px'
            });
        }
    }

    menuhidden(isSecond) {
        if (!isSecond) {
            this.setState({
                open: false,
                ulWidth:'402px'
            });
        }
        else {
           this.setState({
                ulWidth:'402px'
            });
        }
    }


    createSecondlyBar(){
        let minWidth = Math.ceil(this.props.menuData.Items.length / 9) * 400 + 'px';
        let maxCount = 9;
        let itemNodes = [];
        for (let i = 0, len = this.props.menuData.Items.length; i < len; i += maxCount) {
            itemNodes.push(this.props.menuData.Items.slice(i, i + maxCount));
        }
        let secondlyMenu = (<ul onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)} style={{minWidth: minWidth }}
        className={"acs-navbaritem-second acs-navbaritem-secondO " + (this.state.open?"acs-navbaritem-OpenFlex":"acs-navbaritem-Close")}>
            {itemNodes.map((item, index) => {
                return (<div style={{ "flexDirection": "column" }}>
                    {item.map((els, index) => {
                        return <NavLink itemLink={els} classNames={"acs-itemlink"}  key={"Link"+index} itemNum={0}></NavLink>
                    })}
                </div>)
            })}
        </ul>);

        return secondlyMenu;
    }

    createThirdlyBar(){
        let thirdlyMenu = (<ul onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)} 
        className={"acs-navbaritem-second" +(this.state.open?" acs-navbaritem-OpenBlock":" acs-navbaritem-Close")} style={{width:this.state.ulWidth}}>
            {this.props.menuData.Items.map((els, index) => {
                if (typeof els.Items === 'object') {
                    if (els.Items.length === 0) {
                        return <NavLink itemLink={els} classNames={"acs-secondnav-item"}  key={"Link"+index} itemNum={0} ></NavLink>
                    }
                    else {
                        return (<SecondItem key={index} menuData={els} menushow={this.menushow.bind(this,true)} menuhidden={this.menuhidden.bind(this,true)}/>)
                    }
                }
                else {
                    return <NavLink itemLink={els} classNames={"acs-itemlink"}  key={"Link"+index} itemNum={index} ></NavLink>
                }
            })}
        </ul>);

        return thirdlyMenu;
    }

    render() {
        let menuBar = null;
        let secondlyMenu = this.createSecondlyBar();
        let thirdlyMenu = this.createThirdlyBar();

        menuBar = this.props.hasGrandChild ? thirdlyMenu : secondlyMenu;
        menuBar = this.props.menuData.hasChild ? menuBar : null;

        return (
            <div className="acs-navbar-item" style={{cursor:'default'}} onMouseOver={this.menushow.bind(this, false)} onMouseOut={this.menuhidden.bind(this, false)}>
                <NavTitleBtn classname={"acs-navbaritem-titlebtn"} isSecond={false} name={this.props.menuData.Title} open={this.state.open} hasChild={this.props.menuData.hasChild} ItemHref={this.props.menuData.ItemHref} />
                {menuBar}
            </div>)
    }
}

class SecondItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sopen: false
        };
    }

    menushow() {
        this.props.menushow();
        this.setState({
                 sopen: true
            });
    }

    menuhidden() {
        this.props.menuhidden();
        this.setState({
                sopen: false
            });
    }


    render() {
        return (
            <div className="acs-secondnav-item" onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)}>
                <NavTitleBtn classname={""} isSecond={true} name={this.props.menuData.Title} open={this.state.sopen} hasChild={true} ItemHref={this.props.menuData.ItemHref} />
                <ul onMouseOver={this.menushow.bind(this)} onMouseOut={this.menuhidden.bind(this)} className="acs-thirdnav-itemlist" style={{ display: this.state.sopen ? "block" : "none"}}>
                    {this.props.menuData.Items.map((el, index) => {
                        return <NavLink itemLink={el} classNames={"acs-itemlink"}  key={"Link"+index} itemNum={0} ></NavLink>
                    })}
                </ul>
            </div>
        )
    }
}
