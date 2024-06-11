import Component from 'flarum/common/Component';

export default class Download extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle("Download");
  }

  view() {
    return (
      <div class="ContentPages Pages Pages--isHtml" data-id="3" data-slug="download">
        <div class="Pages-page">
          <header class="Hero PageHero">
            <div class="container">
              <ul class="PageHero-items">
                <li class="item-title"><h1 class="PageHero-title"><a href="javascript://">Download Our Apps</a></h1>
                </li>
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
