import Accordion from '../accordion/accordionFrame.jsx';

export default class navbarMenuList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        let {data} = this.props;

        let mobileNav = data.map((secItem,fid)=>{
            if(secItem.hasChild){
                let thirdLevel = null;
                if(secItem.hasGrandChild){
                    thirdLevel=thirdLevel = secItem.Items.map((thrItem,sid)=>{
                        return (
                            <Accordion key={'secnav'+sid} accordionData={thrItem} itemHeight={"auto"} hasInfoPanel={false} informationEvent={null} >
                                {thrItem.Items.map((itemLink,tid)=>{
                                    return (<a key={'link'+tid} href={itemLink.ItemHref}>{itemLink.Title}</a>);
                                })}
                            </Accordion>);
                    })
                 }
                 else{
                    thirdLevel = secItem.Items.map((itemLink,sid)=>{
                        return (<a key={'link'+sid} href={itemLink.ItemHref}>{itemLink.Title}</a>);
                    })
                 }
                return(
                    <Accordion key={'firnav'+fid} accordionData={secItem} itemHeight={"auto"} hasInfoPanel={false} informationEvent={null} >
                        {thirdLevel}
                    </Accordion>
                );
            }
            else{
                return (
                    <div key={'firnav'+fid}>{secItem.Title}</div>
                )
            }
        });

        return (
                <div className="acs-navbar">
                   {mobileNav}
                </div>
            )
    }

}

