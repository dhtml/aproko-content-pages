import Component from 'flarum/common/Component';

export default class AboutUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("About Us");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="1" data-slug="about-us">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">About Us</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">
              <table style="background-color: #F9F8F3; border-radius: 10px; padding: 20px 5% 20px 5%; height: 80%;">
                <tr>
                  <td>
                    <h3>AprokoNation: Learn, Share and Relate Without the Hate or Bigotry!</h3>
                    <p>Welcome to AprokoNation, Nigeria's biggest online forum for incisive and stimulating discussions!
                      We're all about bringing people together to chat about anything and everything under the sun.</p>
                    <h4>What Makes AprokoNation Different?</h4>
                    <ul>
                      <li><b>Mic for Everyone:</b> Want to talk about the latest news, current events, politics,
                        relationships, banging music videos, or even what to get your loved one? There is a space for
                        you, nobody go off your Mic.
                      </li>
                      <li><b>Respect is Key:</b> Healthy debate and open minds is what we do here. We encourage lively
                        discussions, but name-calling and hateful talk are not tolerated. We are all here to learn,
                        share, and have fun together.
                      </li>
                      <li><b>No Room for Bad Vibes:</b> AprokoNation is a bigotry-free zone. We take a strong stance
                        against mean words and insults. If you post any content that promotes discrimination or violence
                        it will disappear, and you might not be able to make posts again.
                      </li>
                    </ul>
                    <h4>AprokoNation: More Than Just Talk</h4>
                    <ul>
                      <li><b>Meet New People:</b> Share your experiences, ask questions, and build relationships with
                        people who share your interests.
                      </li>
                      <li><b>Learn Something New:</b> Every day is a chance to discover something cool! Share your
                        knowledge and see what others have learned too. Real knowledge comes with proof, so try to add
                        facts and details to your posts whenever you can!
                      </li>
                      <li><b>Make Your Voice Heard:</b> Got an opinion? Share it! AprokoNation is your platform to say
                        your mind, nobody go off your Mic!
                      </li>
                    </ul>
                    <p>We are AprokoNation, and we share only good vibes!</p>
                    <p>P.S. Looking for a place to spread hate and negativity? check Nairland.com! AprokoNation is where
                      you want to have fun, learn new things, and connect with other people in a respectful </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
