export default class EventsItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.dataItem;

        return (<div className="acs-evnet-container">
            <div className="acs-event-timePic">
                <div className="acs-month">
                    <span>{item.month}</span>
                </div>
                <div className="acs-date">
                    <span>{item.day}</span>
                </div>
            </div>
            <div className="acs-timeDes">
                <div className="acs-timeDes-title">
                    <a className="acs-title" title={item.title} href={item.href}>{item.title}</a>
                </div>
                <div className="acs-timeDes-time">
                    <div className="acs-pic-clock"></div><span className="acs-event-time">{item.time}</span></div>
                <div className="acs-timeDes-location">
                    <div className="acs-pic-location"></div><span className="acs-event-location">{item.location}</span>
                </div>
            </div>
        </div>);
    }
}
