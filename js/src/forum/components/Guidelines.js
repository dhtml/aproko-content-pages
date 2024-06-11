import Component from 'flarum/common/Component';

export default class Guidelines extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Community Guidelines");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="3" data-slug="terms">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Community Guidelines</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">
              <table style="background-color: #F3F1E7; border-radius: 10px; padding: 20px 5% 20px 5%; height: 80%;">
                <tr>
                  <td>
                    <h3>AprokoNation Community Guidelines</h3>
                    <p>Welcome to AprokoNation, the Nigerian forum for incisive discussions and awesome people! To keep
                      AprokoNation a fun and safe place for everyone, we've put up this Community Guidelines. By
                      participating in our forum, you agree to follow these guidelines:</p>
                    <h4>Respectful Interactions:</h4>
                    <ul>
                      <li><b>Be polite and considerate:</b> Treat others with the same respect you want to be treated
                        with. No name-calling, insults, personal attacks, hate speech, or bigotry will be tolerated.
                      </li>
                      <li><b>Disagree respectfully:</b> It's okay to have different opinions, but express them in a
                        civil manner. Focus on the ideas, not the person. Avoid using provocative language or personal
                        insults.
                      </li>
                      <li><b>Be mindful of your audience:</b> AprokoNation is a diverse community. Be sensitive to
                        cultural differences and avoid offensive language or topics.
                      </li>
                    </ul>
                    <h4>Content Guidelines:</h4>
                    <ul>
                      <li><b>Stay on topic:</b> Discussions should be relevant to the forum thread or topic at hand.
                      </li>
                      <li><b>No spam or self-promotion:</b> This is a platform for discussion, not unsolicited
                        advertising. Avoid excessive self-promotion or posting links to unrelated content.
                      </li>
                      <li><b>Accuracy matters:</b> Share information that is truthful and verifiable. When possible,
                        back up your claims with facts and sources. Avoid spreading misinformation or rumors.
                      </li>
                      <li><b>No graphic content:</b> Avoid posting violent or disturbing content. This includes images,
                        videos, or detailed descriptions of violence, gore, or other graphic content.
                      </li>
                      <li><b>Keep it legal:</b> Don't share content that is illegal or promotes illegal activity. This
                        includes copyright infringement, hate speech, or threats of violence.
                      </li>
                    </ul>
                    <h4>Content Moderation:</h4>
                    <ul>
                      <li><b>AprokoNation reserves the right to remove content:</b> Our moderators will remove posts
                        that violate our guidelines. This includes posts that are offensive, disrespectful, inaccurate,
                        or illegal.
                      </li>
                      <li><b>Report violations:</b> If you see someone breaking the rules, report the post to the
                        moderators using the "Report" button.
                      </li>
                      <li><b>Consequences for violations:</b> Repeated violations of the guidelines may result in
                        temporary or permanent suspension from AprokoNation.
                      </li>
                    </ul>
                    <ul>
                      <li><b>Privacy:</b> Be mindful of your privacy and the privacy of others. Avoid sharing personal
                        information that could be used to identify you or others.
                      </li>
                      <li><b>Off-topic Discussions:</b> AprokoNation provides a General category for off-topic
                        discussions and casual chit-chat. Utilize the categories appropriately.
                      </li>
                      <li><b>Spam and Trolling:</b> We have a zero-tolerance policy for spam and trolling.</li>
                    </ul>
                    <p>Remember: AprokoNation is a community we build together. By following these guidelines, you help
                      create a space where everyone feels welcome to participate and share their thoughts.</p>
                    <p>Let's do Aproko with respect and learn from each other!</p>
                    <p>Thank you for being a part of the AprokoNation community!</p>
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
