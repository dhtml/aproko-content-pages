import Component from 'flarum/common/Component';

export default class PrivacyPolicy extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Privacy Policy");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="3" data-slug="privacy-policy">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Privacy Policy</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">
              <table style="background-color: #F3F1E7; border-radius: 10px; padding: 20px 5% 20px 5%; height: 80%;">
                <tr>
                  <td>
                    <h3>AprokoNation: Your Info, Our Promise</h3>
                    <p>Welcome to AprokoNation, Nigeria's biggest online forum for incisive and stimulating discussions!
                      This privacy policy explains how we collect, use, and disclose your information when you use our
                      platform.</p>
                    <h4>Information We Collect</h4>
                    <ul>
                      <li><b>Registration Information:</b> When you sign up on AprokoNation, we collect basic
                        information like your username, email address (optional), and any information you choose to
                        include in your profile.
                      </li>
                      <li><b>Activity Information:</b> We collect data about your activity on AprokoNation, such as the
                        topics you discuss, the posts you read and create, and the time you spend on the forum.
                      </li>
                      <li><b>Device Information:</b> We collect information about the device you use to access
                        AprokoNation, such as your IP address, operating system, and browser type.
                      </li>
                    </ul>
                    <h4>What We Do With It:</h4>
                    <ul>
                      <li><b>Keep AprokoNation Running Smoothly:</b> We use your information to operate AprokoNation
                        efficiently, personalize your experience, and improve the forum for everyone.
                      </li>
                      <li><b>Keep You in the Loop:</b> We may use your email address to send you important updates about
                        AprokoNation, like security information or changes to our rules.
                      </li>
                      <li><b>Comply with Law:</b> We might share your information if the law says we have to, or to
                        protect ourselves and others from harm.
                      </li>
                    </ul>
                    <h4>Your Choices:</h4>
                    <ul>
                      <li><b>Profile Information:</b> You can access and update your profile information whenever you
                        want.
                      </li>
                      <li><b>Communication Preferences:</b> You can choose to unsubscribe from our marketing emails by
                        following the instructions in the emails.
                      </li>
                    </ul>
                    <h4>Data Retention:</h4>
                    <p>We will retain your information for as long as your account is active or as needed to provide you
                      with services. We may also retain some information for legal or regulatory reasons.</p>
                    <h4>Data Security:</h4>
                    <p>We take reasonable steps to protect your information from unauthorized access, disclosure,
                      alteration, or destruction. However, remember, nothing online is 100% secure, so we can't
                      guarantee it.</p>
                    <h4>Children's Privacy:</h4>
                    <p>AprokoNation is not intended for children under the age of 13. We do not knowingly collect
                      personal information from children under 13. If you are a parent or guardian and you believe your
                      child has provided us with personal information, please contact us.</p>
                    <h4>Changes to This Policy:</h4>
                    <p>We may update this privacy policy from time to time. We will notify you of any changes by posting
                      the new privacy policy on our website.</p>
                    <h4>Contact Us:</h4>
                    <p>If you have any questions about this privacy policy, please contact us at <a
                      href="mailto:aprokodaddy@aprokonation.com">aprokodaddy@aprokonation.com</a> / <a
                      href="mailto:aprokomummy@aprokonation.com">aprokomummy@aprokonation.com</a>.</p>
                    <p>By using AprokoNation, you agree to the terms of this privacy policy.</p>
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
