export default class NavbarTitleBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon: this.props.hasChild?(this.props.isSecond?"acs-titlebtn-right":"acs-titlebtn-down"):""
        };
    }

    render(){
        let {open, isSecond, hasChild,classname,name,ItemHref} = this.props;

        let borderShow = (open && (!isSecond) ) && hasChild;
        let heightChange = classname === ''?"20px":"60px";
        let icon = hasChild?(
            open?(isSecond?"acs-titlebtn-rightw":"acs-titlebtn-up"):(isSecond?"acs-titlebtn-right":"acs-titlebtn-down")):""
            ;
        let fontColor=hasChild?(
            open?(isSecond?"stitle-selectcolor":"ftitle-selectcolor"):""):""
        ;



    return(<a href={ItemHref === ''?"javascript:void(0);":ItemHref} className={(!isSecond?"acs-titlebtn-noneborder ":" ")+classname + (borderShow?" acs-titlebtn-boxshadow acs-titlebtn-border":"") } 
    style={{height:borderShow?"65px":heightChange,cursor:ItemHref === ''?'default':'pointer'}}>
                     <span className={'acs-titlebtn-span '+ fontColor}>{name}<span className={icon}></span></span>
             </a>
       )   
    }
}
