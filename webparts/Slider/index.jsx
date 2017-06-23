import { render } from 'react-dom';
import SliderFrame from '../../components/slider/sliderFrameArrowOnBottom.jsx';
import SliderItem from '../../components/slider/sliderItemFrame.jsx';
import SliderPics from '../../components/componenta/picture.jsx';
import $ from 'jquery';

function sliderRender(config) {

    let data = [{ 'src': '../../components/img/image1.jpg', 'alt': 'image1', 'itemhref': 'www.baidu.com', 'title': 'aaa', 'description': 'aaa description' },
    { 'src': '../../components/img/image2.jpg', 'alt': 'image2', 'itemhref': 'www.sina.com.cn', 'title': 'bbb', 'description': '' },
    { 'src': '../../components/img/image3.jpg', 'alt': 'image3', 'itemhref': 'www.sohu.com', 'title': '', 'description': 'desc2' }];

    let param = { url: '', speed: 1, delay: 1, pause: true, autoplay: false, dots: true, arrows: true, listurl: '' };

    function renderUI(data, param) {
        if (document.getElementById('slider')) {
            render(
                <SliderFrame
                    itemCount={data.length}
                    speed={param.speed}
                    delay={param.delay}
                    pause={param.pause}
                    autoplay={param.autoplay}
                    dots={param.dots}
                    arrows={param.arrows}
                >
                    <SliderItem colleData={data} countAve={1} isWholeCell={true}>
                        <SliderPics />
                    </SliderItem>
                </SliderFrame>,
                document.getElementById('slider')
            );
            //AIC.wordLimit('.acs-titledescriptionpanel-description',2);
        }
    }

    function loadData(param) {
        $.ajax({
            type: "GET",
            url: config.url,
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            dataType: "json",
            data: {},
            config: param,
            async: false,
            cache:false,
            success: function (dataInput) {
                var data = new Array();
                for (var i = 0, l = dataInput.d.results.length; i < l; i++) {
                    data.push({
                        'src': dataInput.d.results[i].ACSImageUrl,
                        'alt': dataInput.d.results[i].Title,
                        'itemhref': this.config.listurl + '/DispForm.aspx?ID=' + dataInput.d.results[i].ID,
                        'title': dataInput.d.results[i].Title,
                        'description': dataInput.d.results[i].ACSDescription
                    })
                }
                renderUI(data, this.config);
            },
            error: function (data) {
                debugger;
            }
        });
    }

    if (config && !config.debug) {
        param.speed = config.speed ? config.speed : 1;
        param.delay = config.delay ? config.delay : 1;
        param.pause = config.pause ? config.pause : true;
        param.autoplay = config.autoplay ? config.autoplay : false;
        param.dots = config.dots ? config.dots : true;
        param.arrows = config.arrows ? config.arrows : true;
        param.listurl = config.listurl ? config.listurl : '';
        loadData(param);
    }
    else {
        renderUI(data, param);
    }
}

global.sliderRender = sliderRender;
