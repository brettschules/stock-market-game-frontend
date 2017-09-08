import React, { Component } from 'react';
import LoginSignUpImage from './HowToPlayImages/signup-login.png'
import UserProfileImage from './HowToPlayImages/user-profile.png'
import InvestPage from './HowToPlayImages/invest-page.png'
import TranscationsPage from './HowToPlayImages/transcations-page.png'
import {Image } from 'semantic-ui-react';


export default class HowToPlay extends Component {

  render(){
    return(
      <div className="how-to-play-page">
        <h2>
          Logging in or signing up as a user
        </h2>
        <p>
          On the Home Page, please click on the sign up button if you are not already an user.
          If you are already an user and know your username and password, then please click on the login button.
          Once you click on one of the buttons, a popup will show, please simply follow to the instructers and type in your user credentials.
          See image below for what the login and signUp buttons look like.
        </p>
        <Image className="profile-image" width="15" fluid={true} size="medium" src={LoginSignUpImage} />
        <h2>
          After Signing up or logging in as a user.
        </h2>
        <p>
          Once you are already signed up or logged in, you will automatically be redirected to your profile page.
          Your profile page will contain the following information as show in the image below.
        </p>
        <p>
          <strong>Please note that in order to get the full features of this page, you will have to own at least one equity.</strong>
        </p>
        <Image className="profile-image" width="15" fluid={true} size="massive" src={UserProfileImage} />
        <h2>
          Buying Equities
        </h2>
          <p>
            As a user, you can buying choose to invest in equities at the Invest Page.
            Refer to the image below for more information.
          </p>
          <p>
            <strong>
              Please note that you can only purchase equities when the market is open. (M-F 9:30AM - 4:00PM eastern, not including holidays).
              Any order that is place while the market is not open will be placed as a pending order.
              Any pending orders will be executed at the next market open.
            </strong>
          </p>
          <Image className="profile-image" width="15" fluid={true} size="massive" src={InvestPage} />
          <h2>
            Viewing all of your transcations
          </h2>
          <p>
            As a user, you can view all of your transcations at the Transcations Page.
            The transcations are broken up in the follow categories....
            <ul>
              <li>
                <strong>Name - </strong> Name of the equity you purchased.
              </li>
              <li>
                <strong>Symbol - </strong> Symbol(ticker) of the equity.
              </li>
              <li>
                <strong>Order - </strong> Order type, whether it is a buy or sell.
              </li>
              <li>
                <strong> status - </strong> Status of the equity, whether the order is pending or executed.
              </li>
              <li>
                <strong> Units - </strong> Number of units(shares)
              </li>
              <li>
                <strong> Purchased Price - </strong> Price of what the equity was bought at
              </li>
              <li>
                <strong> Cost Basis - </strong> Total value of what you would need to break even for that equity.
              </li>
              <li>
                <strong> Current Price Per Unit - </strong> Current real time value of that equity.
              </li>
              <li>
                <strong> Market Value - </strong> What the total value of the equity.
              </li>
              <li>
                <strong> Gain/Loss - </strong> Current profit
              </li>
            </ul>
            <Image className="profile-image" width="15" fluid={true} size="massive" src={TranscationsPage} />
          </p>
      </div>
    )
  }
}
