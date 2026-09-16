export type AnalyticsEvent =
  | 'projectCtaClicked'
  | 'contactStarted'
  | 'contactSubmitted'
  | 'projectViewed'
  | 'serviceViewed'
  | 'gentlesuiteProductViewed'

/**
 * No-op analytics hook. No tracking provider is wired up yet — this only
 * defines the event surface so a provider can be dropped in later without
 * touching call sites.
 */
export function trackEvent(event: AnalyticsEvent, payload?: Record<string, string>) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', event, payload ?? {})
  }
}
