import Component from 'flarum/common/Component';

export default class Terms extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Terms of Service");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="3" data-slug="terms">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Terms of Service</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">
              <table style="background-color: #F9F8F3; border-radius: 10px; padding: 20px 5% 20px 5%; height: 80%;">
                <tr>
                  <td>
                    <h3>AprokoNation Terms of Service</h3>
                    <p>Welcome to AprokoNation! By using our platform, you agree to these Terms of Service ("Terms").
                      These Terms govern your access to and use of AprokoNation, a Nigerian online forum for discussion
                      and learning.</p>
                    <h4>1. User Conduct:</h4>
                    <ul>
                      <li><b>Respectful Interactions:</b> Treat others with courtesy and respect. Avoid name-calling,
                        insults, personal attacks, hate speech, or bigotry. Disagreements are welcome, but focus on
                        ideas and express them civilly.
                      </li>
                      <li><b>Content Guidelines:</b> Stay on topic within threads, avoid spam and self-promotion. Share
                        truthful and verifiable information, backing claims with facts and sources. Refrain from posting
                        violent, disturbing, or illegal content.
                      </li>
                    </ul>
                    <h4>2. Content Moderation:</h4>
                    <p>AprokoNation reserves the right to remove content that violates these Terms. Users can report
                      violations to moderators. Repeated violations may lead to temporary or permanent suspension.</p>
                    <h4>3. User Generated Content:</h4>
                    <p>You retain ownership of any content you post on AprokoNation. However, by posting content, you
                      grant AprokoNation a non-exclusive license to display and distribute your content on the
                      platform.</p>
                    <h4>4. Disclaimers:</h4>
                    <p>AprokoNation content is provided for informational purposes only and does not constitute
                      professional advice. You are responsible for your own actions based on the information you
                      encounter. AprokoNation disclaims any liability for inaccurate or misleading content.</p>
                    <h4>5. Third-Party Links:</h4>
                    <p>AprokoNation may contain links to third-party websites. These links are for informational
                      purposes only and AprokoNation is not responsible for the content or practices of any linked
                      site.</p>
                    <h4>6. Termination:</h4>
                    <p>AprokoNation may terminate your access to the platform for any reason, with or without
                      notice.</p>
                    <h4>7. Governing Law:</h4>
                    <p>These Terms shall be governed by and construed in accordance with the laws of Nigeria.</p>
                    <h4>8. Updates to Terms:</h4>
                    <p>AprokoNation may update these Terms at any time. We will notify you of any changes by posting the
                      new Terms on the platform. Your continued use of AprokoNation following the posting of revised
                      Terms constitutes your acceptance of the revisions.</p>
                    <h4>9. Contact Us:</h4>
                    <p>If you have any questions about these Terms, please contact us at <a
                      href="mailto:moddy@aprokonation.com">moddy@aprokonation.com</a>.</p>
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
