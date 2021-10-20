import React from "react";
import "../../assets/styles/sass/components/_loader.scss";
interface Props {
    infoData: any;
}
const Loader: React.FunctionComponent<Props> = (props) => {
    const {infoData} = props;
    return (
        <main className="main-loader">
            <section className="loader">
                <div className="loader__wrapper">
                    <div className="loader__content">
                        <img src={infoData.logo} alt={infoData.alt} />
                    </div>
                </div>
            </section>
        </main>
    );
};
export default Loader;
