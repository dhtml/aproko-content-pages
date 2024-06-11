import app from 'flarum/forum/app';
import AboutUs from './components/AboutUs';
import Guidelines from "./components/Guidelines";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";

app.initializers.add('dhtml/aproko-content-pages', (app) => {
  app.routes.aboutUs = { path: '/about-aprokonation', component: AboutUs };
  app.routes.privacyPolicy = { path: '/privacy-policy', component: PrivacyPolicy };
  app.routes.terms = { path: '/terms-of-service', component: Terms };
  app.routes.guidelines = { path: '/guidelines', component: Guidelines };
});
