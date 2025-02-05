import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('community', 'routes/community.tsx'),
  route('view_font/:slug', 'routes/viewFont.tsx'),
  route('foundry/:name', 'routes/fontFoundry.tsx'),
] satisfies RouteConfig
