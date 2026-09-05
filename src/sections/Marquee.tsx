export default function Marquee({
  items,
  dark = false,
  slow = false,
}: {
  items: string[]
  dark?: boolean
  slow?: boolean
}) {
  const row = (hidden = false) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-display font-medium text-[11vw] md:text-[7vw] leading-none px-6 md:px-10 whitespace-nowrap ${
              dark ? 'text-brand-dark' : 'text-brand-light'
            } ${i % 2 === 1 ? 'text-stroke' : ''}`}
          >
            {item}
          </span>
          <span className={`text-2xl md:text-4xl ${dark ? 'text-brand-dark/40' : 'text-brand-primary'}`}>✦</span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`relative overflow-hidden py-8 md:py-12 border-y ${
        dark ? 'bg-brand-primary border-brand-dark/10' : 'border-brand-light/15'
      }`}
    >
      <div className={`flex w-max ${slow ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {row()}
        {row(true)}
      </div>
    </div>
  )
}
