const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

const mockEvents = [
  {
    id: '1',
    summary: 'Live at The Barbican',
    location: 'Barbican Centre, London',
    start: { dateTime: '2026-07-12T19:30:00Z' },
    htmlLink: '#',
  },
  {
    id: '2',
    summary: 'Edinburgh Festival Performance',
    location: 'Usher Hall, Edinburgh',
    start: { dateTime: '2026-08-05T20:00:00Z' },
    htmlLink: '#',
  },
  {
    id: '3',
    summary: 'Album Launch Night',
    location: 'Village Underground, London',
    start: { dateTime: '2026-09-20T19:00:00Z' },
    htmlLink: '#',
  },
]

export async function getUpcomingEvents() {
  if (!CALENDAR_ID || !API_KEY) {
    return mockEvents
  }

  const now = new Date().toISOString()
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&singleEvents=true&orderBy=startTime&maxResults=20`

  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch events')
  const data = await res.json()
  return data.items ?? []
}

export function formatEventDate(event) {
  const raw = event.start?.dateTime ?? event.start?.date
  if (!raw) return ''
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(raw))
}
