import React from "react";
import MainLatestNewsItemInfo from "./MainLatestNewsItemInfo";
import MainTagsSection from "./MainTagsSection";
interface Props {
    infoData: any;
}
class MainLatestNewsItem_4 extends React.Component<any, any> {
    private sliderRef: React.RefObject<HTMLDivElement>;
    private sliderOptions: any;
    constructor(props: Props) {
        super(props);
        this.sliderRef = React.createRef();
        this.sliderOptions = {
            value: 0,
            value_1: 740,
            breakpoint: -2220,
            unit: "px",
        };
    }
    flipThrough = (slide: HTMLDivElement, btnType: string, options: any) => {
        if (btnType === "prev") {
            options.value = options.value + options.value_1;
            if (options.value > 0) options.value = options.breakpoint;
        }
        if (btnType === "next") {
            options.value = options.value - options.value_1;
            if (options.value < options.breakpoint) options.value = 0;
        }
        slide.style.cssText = `transform: translateX(${options.value + options.unit}); transition: all ease 0.5s;`;
    };
    render() {
        const {hrefs, srcItem, infoData} = this.props;
        return (
            <div className="post-news">
                <article className="latest-news__item">
                    <div className="latest-news__content_slider">
                        <button className="slider-btn_prev" onClick={() => (this.sliderRef.current ? this.flipThrough(this.sliderRef.current, "prev", this.sliderOptions) : false)}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="latest-news__content_slider-container">
                            <div className="latest-news__content_slide" ref={this.sliderRef}>
                                {srcItem.sliderItems.map((src: any) => {
                                    return <img src={src} alt="" key={`${src}-${Math.random()}`} />;
                                })}
                            </div>
                        </div>
                        <button className="slider-btn_next" onClick={() => (this.sliderRef.current ? this.flipThrough(this.sliderRef.current, "next", this.sliderOptions) : false)}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </article>
                <article className="latest-news__item">
                    <MainLatestNewsItemInfo hrefs={hrefs} srcItem={srcItem} infoData={infoData} />
                </article>
                <MainTagsSection infoData={infoData} />
            </div>
        );
    }
}
export default MainLatestNewsItem_4;
