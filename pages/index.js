import Head from "katatema/head";
import React from "react";
import Style from "../stylesheets/main.scss";

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8"/>
      <title>MFKS17</title>
      <meta name="viewport" content="width=device-width"/>
      <meta name="description" content="About mfks17"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:description" content="About mfks17"/>
      <meta name="twitter:image" content="https://avatars3.githubusercontent.com/u/1155040?v=3&u=460"/>
      <meta name="twitter:title" content="MFKS17"/>
      <meta property="og:description" content="About mfks17"/>
      <meta property="og:image" content="https://avatars3.githubusercontent.com/u/1155040?v=3&u=460"/>
      <meta property="og:site_name" content="MFKS17"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://mfks17.github.io"/>
    </Head>
    <Style/>
    <header className="header">
      <div className="container">
        mfks17
      </div>
    </header>
    <main>
      <section className="main-section">
        <div className="container">
          <div className="row">
            <div className="column-small-3">
              <p>
                <img className="avatar" src="https://avatars3.githubusercontent.com/u/1155040?v=3&u=460" alt="icon"/>
              </p>
            </div>
            <div className="column-small-9">
              <p>
                I'm <a href="https://twitter.com/mfks17" target="_blank">@mfks17</a> a web programmer and game player from Kanagawa, Japan.
              </p>
              <p>
                Interested in #Swift / #Objective-C / #Apple / #CI / #DevOps / #ML ...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container">
          <h1 className="main-section-heading">
            Activities
          </h1>
          <div className="row">
            <div className="column-small-4">
              <a href="https://github.com/mfks17" target="_blank" className="activity">
                <div className="activity-image" style={{ backgroundImage: "url(https://dl.dropboxusercontent.com/u/41130551/1485003398_github.png)" }}/>
                <div className="activity-heading">
                  Code
                </div>
              </a>
            </div>
            <div className="column-small-4">
              <a href="http://mfks17.hateblo.jp" target="_blank" className="activity">
                <div className="activity-image" style={{ backgroundImage: "url(https://dl.dropboxusercontent.com/u/41130551/1485002991_lifejournal_life_journal.png)" }}/>
                <div className="activity-heading">
                  Blog
                </div>
              </a>
            </div>
            <div className="column-small-4">
              <a href="https://twitter.com/mfks17" target="_blank" className="activity">
                <img src="https://dl.dropboxusercontent.com/u/41130551/1485003054_bird_twitter.png" alt="" className="avatar"/>
                <div className="activity-heading">
                  Tweet
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container">
          <h1 className="main-section-heading">
            Contact
          </h1>
          <a href="https://twitter.com/mfks17" target="_blank">Twitter</a>&nbsp;
          <a href="https://github.com/mfks17" target="_blank">GitHub</a>
        </div>
      </section>
    </main>
  </div>
)
