import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, useLocation, withRouter } from "react-router-dom";

// Scroll to top of the page when changing routes
function ScrollToTop(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }, 1500);
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
