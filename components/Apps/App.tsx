import React from "react";
import informationData from "../../data/data.js";
import Loader from "../Loader/Loader";
interface Props {
    Header: any;
    Main: any;
    Footer: any;
}
class App extends React.Component<Props> {
    state = {
        isLoading: true,
    };
    getRandomDelay = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    componentDidMount() {
        setTimeout(() => this.setState({isLoading: false}), this.getRandomDelay(1000, 5000));
    }
    render() {
        const {Header, Main, Footer} = this.props;
        return (
            <React.Fragment>
                {this.state.isLoading ? (
                    <Loader infoData={informationData.header.headerLower} />
                ) : (
                    <React.Fragment>
                        <Header infoData={informationData} />
                        <Main infoData={informationData} />
                        <Footer infoData={informationData} />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}
export default App;
