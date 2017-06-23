export default class SliderArrows extends React.Component {
    constructor(props) {
        super(props);
    }

    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div className="acs-slider-arrow-wrap">
                <span className="acs-slider-arrow-left" onClick={this.handleArrowClick.bind(this, -1)}> </span>
                {this.props.children ? this.props.children : ''}
                <span className="acs-slider-arrow-right" onClick={this.handleArrowClick.bind(this, 1)}></span>
            </div>
        );
    }
}
