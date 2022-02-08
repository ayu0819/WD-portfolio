import React from 'react';
import {Route, Switch} from "react-router";
import {Home,Reset,SignIn,SignUp,UserMyPage,Admin,About,Contact,Works,Logs,WorkEc,WorkLp,WorkBlog,WorkPortfolio,ChurchIcon,WorkPortfolioUi} from "./templates";
// 認証設定
import Auth from './Auth';

const Router = () => {
    return(
        <Switch>
            <Route exact path={"/signin"} component={SignIn} />
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/signin/reset"} component={Reset} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/works"} component={Works} />
            <Route exact path={"/logs"} component={Logs} />
            <Route exact path={"/works/ec"} component={WorkEc} />
            <Route exact path={"/works/lp"} component={WorkLp} />
            <Route exact path={"/works/blog"} component={WorkBlog} />
            <Route exact path={"/works/portfolio"} component={WorkPortfolio} />
            <Route exact path={"/works/churchicon"} component={ChurchIcon} />
            <Route exact path={"/works/portfolio-ui"} component={WorkPortfolioUi} />

            {/* <Auth> */}
            <Route exact path={"(/)?"} component={Home} />
            {/* <Route exact path={"/admin"} component={Admin} />
            </Auth> */}

        </Switch>
    )
}

export default Router;