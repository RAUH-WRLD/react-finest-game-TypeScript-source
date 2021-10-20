import React from "react";
import ReleasesSliderItem from "../../../Utils/ReusableComponents/ReleasesSliderItem";
interface Props {
    infoData: any;
}
class MainReleasesSection extends React.Component<Props> {
    private sliderRef: React.RefObject<HTMLDivElement>;
    private sliderOptions: any;
    private sourcesArr: any;
    private renderReleasesSlidesTimes: any;
    private renderReleasesSlidesContentArr: any;
    constructor(props: Props) {
        super(props);
        this.sliderRef = React.createRef();
        this.sliderOptions = {
            value: 0,
            value_1: 476,
            breakpoint: -5712,
            unit: "px",
        };
        this.renderReleasesSlidesTimes = 4;
        this.renderReleasesSlidesContentArr = [];
        this.sourcesArr = [this.props.infoData.releasesItem_1, this.props.infoData.releasesItem_2, this.props.infoData.releasesItem_3, this.props.infoData.releasesItem_4, this.props.infoData.releasesItem_5, this.props.infoData.releasesItem_6, this.props.infoData.releasesItem_7, this.props.infoData.releasesItem_8];
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
    renderReleasesSlides = () => {
        for (let index = 0; index < this.renderReleasesSlidesTimes; index++) {
            this.renderReleasesSlidesContentArr.push(
                this.sourcesArr.map((srcItem: any, index: any) => {
                    return <ReleasesSliderItem srcItem={srcItem} href={`${srcItem.title}`} key={`${index}-${Math.random()}`} />;
                }),
            );
        }
        return this.renderReleasesSlidesContentArr;
    };
    render() {
        const {infoData} = this.props;
        return (
            <section className="releases">
                <div className="releases__wrapper">
                    <div className="releases__content font-style-2">
                        <div className="container">
                            <div className="releases__content_title">
                                <h3>{infoData.title}</h3>
                                <div className="releases__content_btns">
                                    <button className="slider-btn_prev" onClick={() => (this.sliderRef.current ? this.flipThrough(this.sliderRef.current, "prev", this.sliderOptions) : false)}>
                                        <i className="fas fa-arrow-left"></i>
                                    </button>
                                    <button className="slider-btn_next" onClick={() => (this.sliderRef.current ? this.flipThrough(this.sliderRef.current, "next", this.sliderOptions) : false)}>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="releases__content_slider">
                            <div className="releases__content_slider-container">
                                <div className="releases__content_slide" ref={this.sliderRef}>
                                    {this.renderReleasesSlides()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MainReleasesSection;
