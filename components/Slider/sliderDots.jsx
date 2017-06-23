export default class SliderDots extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDotClick(i) {
        var option = i - this.props.nowLocal;
        this.props.turn(option);
    }

    render() {
        let dotNodes = [];
        let { count, nowLocal } = this.props;
        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={'dot' + i}
                    className={"acs-slider-dot" + (i === this.props.nowLocal ? " acs-slider-dot-selected" : "")}
                    onClick={this.handleDotClick.bind(this, i)}>
                </span>
            );
        }
        return (
            <div className="acs-slider-dots">
                {dotNodes}
            </div>
        );
    }
}
