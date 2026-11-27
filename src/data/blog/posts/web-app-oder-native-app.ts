import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'web-app-oder-native-app',
  title: 'Web-App oder native App? Eine Entscheidungshilfe für Unternehmen',
  seoTitle: 'Web-App oder native App? Eine Entscheidungshilfe',
  category: 'Web-Apps',
  excerpt:
    'Eine Web-App läuft im Browser auf jedem Gerät, eine native App wird für Android und iOS installiert. Wann welche Variante passt – und warum oft beides auf einer gemeinsamen Datenbasis sinnvoll ist.',
  metaDescription:
    'Web-App oder native App für Android und iOS? Unterschiede bei Zugriff, Gerätefunktionen und Pflege – und wann beide auf einer Datenbasis sinnvoll sind.',
  datePublished: '2026-11-27',
  relatedServiceIds: ['webapp', 'mobile'],
  relatedProjectSlugs: ['emma-solution', 'teretnjaci'],
  body: [
    {
      type: 'paragraph',
      text: 'Eine Web-App ist eine Anwendung, die im Browser läuft und ohne Installation auf Computer, Tablet und Smartphone funktioniert. Eine native App wird für Android oder iOS entwickelt, über die App-Stores installiert und kann Funktionen des Geräts direkt nutzen. Welche Variante passt, hängt davon ab, wer die Anwendung wie nutzt.',
    },
    { type: 'heading', text: 'Die Unterschiede im Überblick' },
    {
      type: 'list',
      items: [
        'Zugriff: Web-Apps öffnen Nutzer über einen Link; native Apps müssen installiert und aktualisiert werden.',
        'Gerätefunktionen: Native Apps nutzen Kamera, Standort, Push-Mitteilungen und Offline-Betrieb meist umfassender.',
        'Plattformen: Eine Web-App deckt alle Geräte mit einer Codebasis ab; native Apps brauchen Android und iOS.',
        'Veröffentlichung: Web-Apps gehen ohne Store-Prüfung live; native Apps durchlaufen die Prüfung von Google und Apple.',
        'Pflege: Jede zusätzliche Plattform erweitert Entwicklung, Tests und Betrieb.',
      ],
    },
    { type: 'heading', text: 'Wann eine Web-App reicht' },
    {
      type: 'paragraph',
      text: 'Für interne Werkzeuge, Kundenportale, Dashboards und SaaS-Produkte, die vor allem am Arbeitsplatz genutzt werden, ist eine Web-App meist die wirtschaftlichere Wahl. Sie ist sofort für alle verfügbar und lässt sich zentral aktualisieren.',
    },
    { type: 'heading', text: 'Wann sich eine native App lohnt' },
    {
      type: 'paragraph',
      text: 'Eine native App lohnt sich, wenn Menschen unterwegs arbeiten, regelmäßig auf Informationen zugreifen oder Gerätefunktionen brauchen – etwa Fahrer in der Logistik oder Leser, die Inhalte auf dem Smartphone abonnieren.',
    },
    { type: 'heading', text: 'Beides auf einer gemeinsamen Datenbasis' },
    {
      type: 'paragraph',
      text: 'Oft ist die Antwort eine Kombination. Für Emma Solution entstanden eine Web-Anwendung, eine Backend-API und eine Android-App, die auf dieselben Daten zugreifen. Bei Teretnjaci werden Inhalte einmal in einem Administrationsportal gepflegt und auf Website, Android und iOS veröffentlicht.',
    },
    { type: 'link', text: 'Web-App- & SaaS-Entwicklung bei Gentle Group Studios', to: '/leistungen/web-app-saas-entwicklung' },
  ],
}

export default post
