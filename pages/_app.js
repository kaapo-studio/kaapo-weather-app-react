import App from "next/app";
import store from "@/redux/store";
import { Provider } from "react-redux";

import "@/styles/globals.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} key={router.route} />
      </Provider>
    );
  }
}

export default MyApp;
