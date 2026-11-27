import type { BlogPost } from './types'
import individuelleSoftwareVsStandardsoftware from './posts/individuelle-software-vs-standardsoftware'
import digitaleBuchungssystemeFuerDienstleister from './posts/digitale-buchungssysteme-fuer-dienstleister'
import digitalePreisrechnerVomAngebotZumPdf from './posts/digitale-preisrechner-vom-angebot-zum-pdf'
import logistiksoftwareWebApiMobile from './posts/logistiksoftware-web-api-mobile'
import contentPlattformWebUndMobile from './posts/content-plattform-web-und-mobile'
import kiAutomatisierungBestehendeSysteme from './posts/ki-automatisierung-bestehende-systeme'
import cloudBetriebWeiterentwicklungNachLaunch from './posts/cloud-betrieb-weiterentwicklung-nach-launch'
import uxUiDesignsystemeStrategieVorPixeln from './posts/ux-ui-designsysteme-strategie-vor-pixeln'
import ortsunabhaengigeSoftwareentwicklungNrw from './posts/ortsunabhaengige-softwareentwicklung-nrw'
import generativeEngineOptimizationGentlegroup from './posts/generative-engine-optimization-gentlegroup'
import projektprozessAnalyseBisBetrieb from './posts/projektprozess-analyse-bis-betrieb'
import barrierefreiheitImWebWarumFruehMitdenken from './posts/barrierefreiheit-im-web-warum-frueh-mitdenken'
import wasKostetIndividuelleSoftware from './posts/was-kostet-individuelle-software'
import websiteRelaunchWannErSichLohnt from './posts/website-relaunch-wann-er-sich-lohnt'
import softwareagenturFindenWoraufAchten from './posts/softwareagentur-finden-worauf-achten'
import webAppOderNativeApp from './posts/web-app-oder-native-app'

export const blogPosts: BlogPost[] = [
  individuelleSoftwareVsStandardsoftware,
  digitaleBuchungssystemeFuerDienstleister,
  digitalePreisrechnerVomAngebotZumPdf,
  logistiksoftwareWebApiMobile,
  contentPlattformWebUndMobile,
  kiAutomatisierungBestehendeSysteme,
  cloudBetriebWeiterentwicklungNachLaunch,
  uxUiDesignsystemeStrategieVorPixeln,
  ortsunabhaengigeSoftwareentwicklungNrw,
  generativeEngineOptimizationGentlegroup,
  projektprozessAnalyseBisBetrieb,
  barrierefreiheitImWebWarumFruehMitdenken,
  wasKostetIndividuelleSoftware,
  websiteRelaunchWannErSichLohnt,
  softwareagenturFindenWoraufAchten,
  webAppOderNativeApp,
].sort((a, b) => b.datePublished.localeCompare(a.datePublished))

export type { BlogPost, BlogBlock } from './types'
