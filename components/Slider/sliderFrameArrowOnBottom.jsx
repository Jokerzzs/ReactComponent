import SliderDots from './sliderDots.jsx';
import SliderArrows from './sliderArrows.jsx';
import SliderFrame from './sliderFrame.jsx';

export default class SliderFrameArrowOnBottom extends SliderFrame {
    constructor(props) {
        super(props);
    }

    render() {

        let showArrows = this.props.arrows && (this.props.itemCount > 1)
        let showDots = this.props.dots && (this.props.itemCount > 1)
        let dotsNode = <SliderDots turn={this.turn.bind(this)} count={this.props.itemCount} nowLocal={this.state.nowLocal} />;

        let arrowsAndDotsNode = '';
        if (showArrows && showDots) {
            arrowsAndDotsNode =
                <SliderArrows turn={this.turn.bind(this)} >
                    {dotsNode}
                </SliderArrows>
        }
        else if (showArrows && !showDots) {
            arrowsAndDotsNode = <SliderArrows turn={this.turn.bind(this)} />
        }
        else if (!showArrows && showDots) {
            arrowsAndDotsNode = { dotsNode }
        }

        let children = React.Children.map(this.props.children, (item, i) => {
            return React.cloneElement(item, {
                left: this.props.left,
                speed: this.props.speed,
                nowLocal: this.state.nowLocal,
                autoplay: this.props.autoplay
            });
        });


        return (
            <div
                className="acs-sliderframe"
                onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null} onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
                {children}
                {arrowsAndDotsNode}
            </div>
        );
    }
}
