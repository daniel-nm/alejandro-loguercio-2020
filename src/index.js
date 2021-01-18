import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, useLocation, withRouter } from "react-router-dom";

function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("timeout 1");
    setTimeout(() => {
      console.log("timeout 2");
      window.scrollTo(0, 0);
    }, 1000);
  }, [pathname]);

  return props.children;
}

const ScrollTop = withRouter(ScrollToTop);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollTop>
        <App />
      </ScrollTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
