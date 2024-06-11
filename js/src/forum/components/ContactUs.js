import Component from 'flarum/common/Component';

export default class ContactUs extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Contact Us");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="2" data-slug="contact-us">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Contact Us</a></h1></li>
              </ul>
            </div>
          </header>
          <div class="Pages-container container">
            <div class="Post-body">

            </div>
          </div>
        </div>
      </div>
    );
  }
}
