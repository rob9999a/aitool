
import React from 'react';
import { Helmet } from 'react-helmet';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Topwrite from './Page/One/One';
import Twopage from './Page/Two/Two';
import AiToolsSimple from './Page/One/One';
import Aiwar from './Page/Four/Four';
import Toolsecret from './Page/Sctool/Sctool';
import Powerai from './Page/PowerAi/Powerai';
import Aiglobal from './Page/Aiglobal/Aiglobal';
import HiddenAIEconomy from './Page/Economyglobal/Economyglobal';
import TrendAnalysis from './Page/Trendai/Trendai';
import Predictai from './Page/Predictai/Predictai';
import AICreatedCompanies from './Page/Aijob/Aijob';
import WorkingForAI from './Page/Aiworking/Aiworking';
import DataFortunes from './Page/Aiworking/Aiworking';
import AIAdvertising from './Page/Advertising/Advertising';
import AITrustPage from './Page/Trustai/Trustai';
import AIIdeaInfluence from './Page/Aiplantidea/Aiplantidea';
import AIGeneratedCEOs from './Page/Aifkpersonn/Aifkperson';
import Aigntruth from './Page/Aigntruth/Aigntruth';
import AIJobImpact from './Page/Aikilljob/Aikilljob';
import JobFutureReality from './Page/Futurejob/Futurejob';
import AIPredictionComponent from './Page/Predict/Predict';
import AIDropshippingSuccess from './Money/Dropshipping/Dropshipping';
import AIDscript from './Money/Aiscript/Aiscript';
import AIDropshippingPage from './Money/Aiscript/Aiscript';
import AIIncomePage from './Money/Makemoney/Makemoney';
import Stepmoney from './Money/Three/Three';
import AIFacebookIncomePage from './Money/Facebook/Facebook';
import AIVacationIncomePage from './Money/Aivacance/Aivacance';
import Howmuch from './Money/Howmuch/Howmuch';
import AIIncomeStory from './Money/Aimoneyeasy/Aimoneyeasy';
import AISilentPartnerPage from './Money/Silentbns/Silent';
import TradingInsights from './Money/Trading/Trading';
import Aireason from './Money/Aireason/Aireason';
import TradingShowdown from './Money/Yourtrader/Yourtrader';
import Aiyourtrader from './Money/Yourtrader/Yourtrader';
import { GlassesIcon, HelpCircle } from 'lucide-react';
import Helpcreate from './Component/Content/Helpcreate/Helpcreate';
import AIToolComparison from './Component/Content/Mdvsleo/Mdvsleo';
import Createpost from './Component/Content/Createpost/Createpost';
import ContentCreationComparison from './Component/Content/Crvscontent/Crvscontent';
import ThinkingVsPrompting from './Component/Thinkingvs/Thinkingvs';
import Aivstraditional from './Component/Content/dfvideoandinput/dfvideoandinput';
import AIContentGuide from './Component/Content/Contentvsoriginal/Contentvsoriginal';
import Gnideas from './Component/Content/Gnideas/Gnideas';
import Aiblogwriting from './Component/Content/Aiblogwriting/Aiblogwriting';
import AIVsFreelancers from './Freelance/Aivsfreelance/Aivsfreelance';
import Freelancehigh from './Freelance/Freelancehigh/Freelancehigh';
import InvisibleSkillsFreelancers from './Freelance/InvisibleSkillsFreelancers/InvisibleSkillsFreelancers';
import Runfreelance from './Freelance/Runfreelance/Runfreelance';
import Aihelp from './Freelance/Aihelp/Aihelp';
import Mistakefreelance from './Freelance/Mistakefreelance/Mistakefreelance';
import Ignorefreelance from './Freelance/Ignorefreelance/Ignorefreelance';
import Freelanceturnai from './Freelance/Freelanceturnai/Freelanceturnai';
import Freelancedms from './Freelance/Freelancedms/Freelancedms';
import AIAutoManageCard from './Freelance/AIAutoManageCard/AIAutoManageCard';
import Helpclient from './Freelance/Helpclient/Helpclient';
import FreelanceAIMistakeStrange from './Freelance/Mskfreelance/Mskfreelance';
import Toolfreelance from './Freelance/Toolfreelance/Toolfreelance';
import FreelancerAIBlockers from './Freelance/FreelancerAIBlockers/FreelancerAIBlockers';
import AvoidBurnoutAI from './Freelance/AvoidBurnoutAI/AvoidBurnoutAI';
import Topfreelance from './Freelance/Topfreelance/Topfreelance';
import SmallBizAIGrowth from './Page/SmallBizAIGrowth/SmallBizAIGrowth';
import SmartDecisionsAI from './Page/SmartDecisionsAI/SmartDecisionsAI';
import AIvsAnalysts from './Page/AIvsanalysts/AIvsanalysts';
import AIBuildsBusiness from './Page/AIbuildsbusiness/AIbuildsbusiness';
import SmallBusinessAI from './Page/SmallBusinessAI/SmallBusinessAI';
import MasterOneAITool from './Page/MasterOneAITool/MasterOneAITool';
import AIvsAnalystss from './Page/AIvsAnalystss/AIvsAnalystss';
import FreelancerAIPage from './Page/FreelancerAIPage/FreelancerAIPage';
import MarketingAIPage from './Page/MarketingAIPage/MarketingAIPage';
import AiStrategy from './Page/AiStrategy/AiStrategy';
import AIAdCampaignCard from './Page/AIAdCampaignCard/AIAdCampaignCard';
import ProfitableCustomersAI from './Page/ProfitableCustomersAI/Profilai';
import Profilai from './Page/ProfitableCustomersAI/Profilai';
import CustomerSupportAI from './Page/Customerupportai/Customerupportai';
import SupplyChainAI from './Page/SupplyChainAI/SupplyChainAI';
import Forecasting from './Page/FinancialForecastingAI/Forecasting';
import Interaction from './Page/AICustomInteraction/Interaction';
import Decisionmaking from './Page/Decisionmaking/Decisionmaking';
import Startupsvsgiants from './Page/Startupsvsgiants/Startupsvsgiants';
import Marketsearch from './Page/Marketsearch/Marketsearch';
import Businessaiarticle from './Page/Businessaiarticle/Businessaiarticle';
import Aipitch from './Page/Aipitch/Aipitch';
import Aiarticle from './Component/Content/Aiarticle/Aiarticle';
import Imagecomparaison from './Component/Content/Imagecomparaison/Imagecomparaison';
import Canaihelpgoviral from './Component/Content/Canaihelpgoviral/Canaihelpgoviral';
import Aisavetime from './Component/Content/Aisavetime/Aisavetime';
import Youtubescript from './Component/Content/Youtubescript/Youtubescript';
import Home from './Component/Website/Home/Home';
import Contentwrapper from './Trends/Contentwrapper/Contentwrapper';
import Claudecomparaison from './Trends/Claudecomparaison/Claudecomparaison';
import Aignnews from './Trends/Aignnews/Aignnews';
import Appleannonce from './Trends/Appleannonce/Appleannonce';
import Innovation from './Trends/Innovation/Innovation';
import Googlemachine from './Trends/Googlemachine/Googlemachine';
import Glassesai from './Trends/Glassesai/Glassesai';
import Brainarticle from './Trends/Brainarticle/Brainarticle';
import Computersuper from './Trends/Computersuper/Computersuper';
import Nasa from './Trends/Nasa/Nasa';
import Battery from './Trends/Battery/Battery';
import Gene from './Trends/Gene/Gene';
import Vrevolution from './Trends/Vrevolution/Vrevolution';
import Tiktok from './Trends/Tiktok/Tiktok';
import Aimovie from './Trends/Aimovie/Aimovie';
import Aisinger from './Component/Content/Aisinger/Aisinger';
import Metaverse from './Trends/Metaverse/Metaverse';
import Aigame from './Component/Content/Aigame/Aigame';
import Holograms from './Component/Content/Holograms/Holograms';
import Aimood from './Component/Content/Aimood/Aimood';
import Aidesign from './Component/Content/Aidesign/Aidesign';
import Comedai from './Component/Content/Comedai/Comedai';
import Influencer from './Component/Content/Influencer/Influencer';
import Lucid from './Component/Content/Lucid/Lucid';
import Events from './Component/Content/Events/Events';
import Sonorus from './Component/Content/Sonorus/Sonorus';
import Footballwar from './Component/Content/Footballwar/Footballwar';
import Footballborder from './Component/Content/Footballborder/Footballborder';
import Aiwarthree from './Component/Content/Aiwarthree/Aiwarthree';
import Dollar from './Component/Content/Dollar/Dollar';
import Trump from './Component/Content/Trump/Trump';
import Secrettrump from './Component/Content/Secrettrump/Secrettrump';
import Road from './Component/Content/Roadmap/Roadmap';
import Strike from './Component/Content/Strike/Strike';
import Nato from './Component/Content/Nato/Nato';
import Google from './Component/Content/Google/Google';
import Scandal from './Component/Content/Scandal/Scandal';
import Bmw from './Component/Content/Bmw/Bmw';
import Tesla from './Component/Content/Tesla/Tesla';
import Lamborghini from './Component/Content/Lamborghini/Lamborghini';
import Musk from './Component/Content/Musk/Musk';
import Rival from './Component/Content/Rival/Rival';
import DeepMind from './Component/Content/DeepMind/DeepMind';
import Anthropic from './Component/Content/Anthropic/Anthropic';
import Global from './Component/Content/Global/Global';
import Whistleblower from './Component/Content/Whistleblower/Whistleblower';
import PrivacyPolicy from './Component/Website/Policy/Policy';
import TermsOfService from './Component/Website/Terms/Terms';
import Contact from './Component/Website/Contact/Contact';
import Workflow from './Component/Content/Workflow/Workflow';
import Trending from './Component/Website/Trending/Trending';



function App() {
  return (

    <>


      <Helmet>
        <title>Fyrexia AI - Discover AI Tools That Transform Your Business</title>
        <meta
          name="description"
          content="Explore the hottest AI tools and strategies that are reshaping automation, content creation, marketing, and more with Fyrexia AI."
        />
        <meta name="keywords" content="AI tools, automation, content creation, Fyrexia, GPT, AI strategies" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Fyrexia AI" />
        <meta property="og:title" content="Fyrexia AI" />
        <meta property="og:description" content="AI tools that boost productivity and growth." />
        <meta property="og:url" content="https://aitools-eosin.vercel.app" />
      </Helmet>


      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Trending" element={<Trending />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/terms-service" element={<TermsOfService />} />

          <Route path="/contact" element={<Contact />} />


          <Route path="/top-writer-ai" element={<Topwrite />} />
          <Route path="/free-ai-business-tools" element={<Twopage />} />
          <Route path="/my-step" element={<Stepmoney />} />
          <Route path="/ai-fake-war" element={<Aiwar />} />

          <Route path="/tools-secret" element={<Toolsecret />} />
          <Route path="/powerfulai" element={<Powerai />} />
          <Route path="/ai-global-economy" element={<Aiglobal />} />


          <Route path="/intelligence-economy-deeper" element={<HiddenAIEconomy />} />
          <Route path="/ai-trend-fake" element={<TrendAnalysis />} />

          <Route path="/ai-predict-economic" element={<Predictai />} />

          <Route path="/ai-create-job-without-humans" element={<AICreatedCompanies />} />

          <Route path="/our-data-build-fortunes" element={<DataFortunes />} />
          <Route path="/ai-working-alone" element={<AICreatedCompanies />} />

          <Route path="/ai-create-advertising-deceive-millions" element={<AIAdvertising />} />

          <Route path="/trust-our-minds" element={<AITrustPage />} />

          <Route path="/ai-plant-ideas" element={<AIIdeaInfluence />} />

          <Route path="/ai-real-companies" element={<AIIdeaInfluence />} />

          <Route path="/ai-run-real-companies" element={<AIGeneratedCEOs />} />

          <Route path="/ai-generate-truth" element={<Aigntruth />} />

          <Route path="/ai-kill-jobs-soon" element={<AIJobImpact />} />

          <Route path="/ai-futur-impact-jobs" element={<JobFutureReality />} />

          <Route path="/predict-ai" element={<AIPredictionComponent />} />

          <Route path="/ai-build-businesses" element={<AIBuildsBusiness />} />

          <Route path="/ai-small-business-growth" element={<SmallBusinessAI />} />


          <Route path="/master-one-ai-tool" element={<MasterOneAITool />} />

          <Route path="/ai-vs-analysts" element={<AIvsAnalystss />} />

          <Route path="/ai-for-freelancers" element={<FreelancerAIPage />} />

          <Route path="/ai-marketing-automation" element={<MarketingAIPage />} />


          <Route path="/ai-business-strategy" element={<AiStrategy />} />


          <Route path="/ai-ad-campaign" element={<AIAdCampaignCard />} />

          <Route path="/ai-best-customers" element={<Profilai />} />

          <Route path="/ai-entrepreneurship" element={<Profilai />} />

          <Route path="/ai-customer-support" element={<CustomerSupportAI />} />

          <Route path="/ai-supply-chain-prediction" element={<SupplyChainAI />} />

          <Route path="/ai-financial-forecasting" element={<Forecasting />} />

          <Route path="/ai-customer-personalization" element={<Interaction />} />

          <Route path="/ai-driven-analytics" element={<Decisionmaking />} />

          <Route path="/ai-startups-advantage" element={<Startupsvsgiants />} />

          <Route path="/ai-market-research" element={<Marketsearch />} />

          <Route path="/ai-business-automation" element={<Marketsearch />} />


          <Route path="/ai-customer-retention" element={<Businessaiarticle />} />

          <Route path="/ai-business-pitch" element={<Aipitch />} />


/* freeelance /*

          <Route path="/ai-make-you-rich" element={<AIDropshippingSuccess />} />
          <Route path="/ai-script-tool" element={<AIDscript />} />
          <Route path="/ai-choose-product" element={<AIDropshippingPage />} />
          <Route path="/replace-your-job-now" element={<AIIncomePage />} />
          <Route path="/ai-post-media-social" element={<AIFacebookIncomePage />} />
          <Route path="/ai-save-you" element={<AIVacationIncomePage />} />
          <Route path="/how-much-you-earn" element={<Howmuch />} />
          <Route path="/ai-moneythinking" element={<AIIncomeStory />} />
          <Route path="/ai-silent-work" element={<AISilentPartnerPage />} />
          <Route path="/ai-trade" element={<TradingInsights />} />
          <Route path="/ai-reason" element={<Aireason />} />
          <Route path="/ai-your-trader" element={<Aiyourtrader />} />




          <Route path="/ai-help-creater" element={<Helpcreate />} />
          <Route path="/midjourney-vs-leonardo" element={<AIToolComparison />} />
          <Route path="/ai-viral-content" element={<Createpost />} />
          <Route path="/ai-advantage" element={<ContentCreationComparison />} />

          <Route path="/ai-thinking-content" element={<ThinkingVsPrompting />} />

          <Route path="/ai-traditional" element={<Aivstraditional />} />

          <Route path="/ai-vs-original" element={<AIContentGuide />} />


          <Route path="/ai-gn-ideas" element={<Gnideas />} />

          <Route path="/ai-blog-writing" element={<Aiblogwriting />} />

          <Route path="/ai-vs-human-creators" element={<Aiarticle />} />


          <Route path="/ai-vs-stock-images" element={<Imagecomparaison />} />

          <Route path="/ai-viral-content" element={<Canaihelpgoviral />} />

          <Route path="/ai-tools-creators" element={<Aisavetime />} />

          <Route path="/ai-youtube-scripts" element={<Youtubescript />} />

          <Route path="/ai-blog-workflow" element={<Workflow />} />










          <Route path="/ai-vs-freelance" element={<AIVsFreelancers />} />
          <Route path="/freelance-stand-out" element={<Freelancehigh />} />

          <Route path="/freelance-skills" element={<InvisibleSkillsFreelancers />} />

          <Route path="/Freelance-business" element={<Runfreelance />} />

          <Route path="/Ai-help-clients" element={<Aihelp />} />

          <Route path="/freelance-mistake" element={<Mistakefreelance />} />

          <Route path="/freelance-ignore-ai" element={<Ignorefreelance />} />

          <Route path="/freelance-competitive" element={<Freelanceturnai />} />

          <Route path="/freelance-dms" element={<Freelancedms />} />

          <Route path="/ai-auto-manage" element={<AIAutoManageCard />} />

          <Route path="/ai-help-client" element={<Helpclient />} />

          <Route path="/ai-mistake-freelance" element={<FreelanceAIMistakeStrange />} />


          <Route path="/tool-freelance" element={<Toolfreelance />} />

          <Route path="/freelance-ai-block" element={<FreelancerAIBlockers />} />

          <Route path="/freelance-ai-avoid" element={<AvoidBurnoutAI />} />

          <Route path="/freelance-ai-clients" element={<Topfreelance />} />


          <Route path="/ai-businesses-staff" element={<SmallBizAIGrowth />} />

          <Route path="/ai-businesses-faster" element={<SmartDecisionsAI />} />

          <Route path="/ai-businesses-analysts" element={<AIvsAnalysts />} />


  /* news */

          <Route path="/gemini-vs-chatgpt4" element={<Contentwrapper />} />

          <Route path="/claude-vs-gpt" element={<Claudecomparaison />} />

          <Route path="/ai-news-journalism" element={<Aignnews />} />


          <Route path="/apple-ai-shift" element={<Appleannonce />} />

          <Route path="/ai-leader-2026" element={<Innovation />} />

          <Route path="/ai-machine-dreams" element={<Glassesai />} />

          <Route path="/quantum-brain-experiment" element={<Brainarticle />} />

          <Route path="/living-biocomputer" element={<Computersuper />} />

          <Route path="/nasa-time-anomaly" element={<Nasa />} />

          <Route path="/nano-battery-50-years" element={<Battery />} />

          <Route path="/sleep-gene-edit" element={<Gene />} />

          <Route path="/vr-sensory-gaming" element={<Vrevolution />} />

          <Route path="/vr-sensory-gaming" element={<Vrevolution />} />

          <Route path="/tiktok-anime-filter" element={<Tiktok />} />

          <Route path="/ai-movie-endings" element={<Aimovie />} />

          <Route path="/ai-singer-resurrected" element={<Aisinger />} />

          <Route path="/metaverse-simulation" element={<Metaverse />} />

          <Route path="/ai-evolving-game" element={<Aigame />} />


          <Route path="/hologram-comeback" element={<Holograms />} />

          <Route path="/ai-mood-dj" element={<Aimood />} />

          <Route path="/vr-home-design" element={<Aidesign />} />

          <Route path="/ai-standup-comedy" element={<Comedai />} />

          <Route path="/ai-influencer-rise" element={<Influencer />} />

          <Route path="/ai-reactive-game" element={<Events />} />

          <Route path="/ai-sound-to-music" element={<Sonorus />} />

          <Route path="/football-war3-ai-coaches" element={<Footballwar />} />


          <Route path="/football-war3-border-clash" element={<Footballborder />} />

          <Route path="/ai-predicts-ww3" element={<Aiwarthree />} />

          <Route path="/dollar-collapse-economic-war" element={<Dollar />} />

          <Route path="/ai-roadmap-ww3" element={<Road />} />

          <Route path="/ai-analyzes-trump-war-signals" element={<Trump />} />

          <Route path="/trump-ai-surveillance" element={<Secrettrump />} />

          <Route path="/trump-ai-strike-leak" element={<Strike />} />

          <Route path="/trump-nato-leaked-audio" element={<Nato />} />


          <Route path="/google-ai-weapons-leak" element={<Google />} />

          <Route path="/trump-ai-leak" element={<Scandal />} />

          <Route path="/bmw-ai-electric-revolution" element={<Bmw />} />

          <Route path="/tesla-ai-robotaxi" element={<Tesla />} />

          <Route path="/lamborghini-ai-supercar" element={<Lamborghini />} />

          <Route path="/elon-musk-ai-vision" element={<Musk />} />

          <Route path="/anduril-vs-musk" element={<Rival />} />

          <Route path="/deepmind-agi-quest" element={<DeepMind />} />

          <Route path="/anthropic-ai-safety" element={<Anthropic />} />


          <Route path="/ai-assassination-leak" element={<Global />} />

          <Route path="/ai-surveillance-whistleblower" element={<Whistleblower />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;

