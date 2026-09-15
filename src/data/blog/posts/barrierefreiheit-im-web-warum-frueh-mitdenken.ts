import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'barrierefreiheit-im-web-warum-frueh-mitdenken',
  title: 'Barrierefreiheit im Web: Warum sie früh mitgedacht werden sollte',
  category: 'Webdesign',
  excerpt:
    'Barrierefreiheit lässt sich nachträglich kaum vollständig nachrüsten. Systematische Prüfung von Anfang an spart deutlich mehr Aufwand als eine spätere Korrektur.',
  datePublished: '2026-06-15',
  relatedServiceIds: ['web'],
  body: [
    {
      type: 'paragraph',
      text: 'Barrierefreiheit wird häufig als letzter Schritt vor dem Launch behandelt — obwohl viele der relevanten Entscheidungen bereits in Konzeption und Design getroffen werden: Kontraste, Struktur von Überschriften, Tastaturbedienbarkeit, Beschriftung von interaktiven Elementen. Wird das erst am Ende geprüft, lassen sich grundlegende Probleme oft nur noch mit größerem Aufwand korrigieren.',
    },
    {
      type: 'heading',
      text: 'Typische Stellen, an denen Barrierefreiheit früh entschieden wird',
    },
    {
      type: 'list',
      items: [
        'Farbkontraste zwischen Text und Hintergrund, festgelegt im Designsystem.',
        'Eine sinnvolle Heading-Struktur (h1–h3), die auch ohne visuelles Design eine logische Reihenfolge ergibt.',
        'Tastaturbedienbarkeit von Menüs, Formularen und interaktiven Komponenten.',
        'Eindeutige Beschriftungen für Buttons, Links und Formularfelder, auch für Screenreader.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Diese Prüfung systematisch statt punktuell durchzuführen, war der Ausgangspunkt für GentleAccess — unser eigenes Werkzeug, das Teams dabei unterstützt, Barrierefreiheit systematisch zu prüfen und zu verbessern, statt sie einmalig und unvollständig abzuhaken.',
    },
    {
      type: 'heading',
      text: 'Ein fortlaufender Prozess, kein einmaliger Haken',
    },
    {
      type: 'paragraph',
      text: 'Barrierefreiheit ist kein Zustand, der einmal erreicht und dann dauerhaft erhalten bleibt — jede neue Seite, jede neue Komponente kann neue Probleme einführen. Systematische, wiederholbare Prüfung während der Entwicklung ist deshalb deutlich wirksamer als eine einmalige Prüfung kurz vor dem Launch.',
    },
  ],
}

export default post
