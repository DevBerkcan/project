import type { BlogPost } from '../types'

const post: BlogPost = {
  slug: 'logistiksoftware-web-api-mobile',
  title: 'Logistiksoftware mit Web, API und mobiler Anwendung',
  category: 'Web-Apps',
  excerpt:
    'Logistikprozesse laufen selten an einem einzigen Ort ab. Eine zentrale Plattform muss deshalb im Büro, im System und unterwegs gleichermaßen funktionieren.',
  datePublished: '2026-08-17',
  relatedServiceIds: ['software', 'mobile'],
  relatedProjectSlugs: ['emma-solution'],
  body: [
    {
      type: 'paragraph',
      text: 'Logistik verbindet mehrere Ebenen: Fracht- und Fahrzeugverwaltung im Büro, operative Abläufe im System und Tracking unterwegs. Werden diese Ebenen in getrennten Werkzeugen gepflegt, entstehen Informationslücken genau dort, wo Aktualität am wichtigsten ist.',
    },
    {
      type: 'heading',
      text: 'Drei Zugänge, ein System',
    },
    {
      type: 'paragraph',
      text: 'Für Emma Solution haben wir eine umfassende Logistik-Management-Plattform entwickelt, die Fracht- und Fahrzeugverwaltung, operative Abläufe und Echtzeit-Tracking in einem gemeinsamen System verbindet. Technisch besteht die Lösung aus drei Teilen, die auf denselben Daten arbeiten:',
    },
    {
      type: 'list',
      items: [
        'Eine Web-Anwendung für die zentrale Verwaltung im Büro.',
        'Eine Backend-API, über die alle Informationen konsistent gehalten werden.',
        'Eine Android-App, mit der relevante Informationen unterwegs abgerufen werden können.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Der entscheidende Punkt ist nicht die Anzahl der Zugänge, sondern dass sie dieselbe Datenbasis teilen. Eine Änderung im Web-Backend ist sofort auch in der mobilen Anwendung sichtbar — ohne manuellen Abgleich zwischen Systemen.',
    },
    {
      type: 'heading',
      text: 'Wann sich eine eigene mobile Anwendung lohnt',
    },
    {
      type: 'paragraph',
      text: 'Eine native oder mobile Anwendung lohnt sich, wenn Nutzer regelmäßig unterwegs auf aktuelle Informationen angewiesen sind — nicht als Standardzusatz zu jeder Web-App. Bei Logistikprozessen mit Fahrzeugen und Auslieferungen ist dieser Bedarf naturgemäß gegeben, weshalb die mobile Anwendung hier kein Extra, sondern ein notwendiger dritter Zugang zum selben System war.',
    },
  ],
}

export default post
