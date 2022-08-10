export default {
  lang: 'en-US',
  title: 'Refactoring',
  description: 'Vite & Vue powered static site generator.',
  themeConfig: {
    sidebar: {
      '/martin-fowler/': sidebarMartin(),
      '/girish/': sidebarGirish(),
    },
    nav: [
      { text: 'Versi Martin Fowler', link: '/martin-fowler/' },
      { text: 'Versi Girish', link: '/girish/' },
    ]
  },
}

function sidebarMartin() {
  return [

  ]
}

function sidebarGirish() {
  return [
    {
      text: 'Panduan',
      collapsible: true,
      items: [
        { text: 'Perkenalan', link: '/girish/' },
      ]
    },
    {
      text: 'Abstraction Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/abstractions/' },
        { text: 'Missing Abstractions', link: '/girish/abstractions/missing-abstractions' },
        { text: 'Imperative Abstractions', link: '/girish/abstractions/imperative-abstractions' },
        { text: 'Incomplete Abstractions', link: '/girish/abstractions/incomplete-abstractions' },
        { text: 'Multifaceted Abstractions', link: '/girish/abstractions/multifaceted-abstractions' },
        { text: 'Unnecessary Abstractions', link: '/girish/abstractions/unnecessary-abstractions' },
        { text: 'Unitilized Abstractions', link: '/girish/abstractions/unitilized-abstractions' },
        { text: 'Duplicate Abstractions', link: '/girish/abstractions/duplicate-abstractions' },
      ]
    },
    {
      text: 'Encapsulation Smells',
      collapsible: true,
      items: [
        { text: 'Missing Abstractions', link: '/girish/abstractions/missing-abstractions' },
        { text: 'Imperative Abstractions', link: '/girish/abstractions/imperative-abstractions' },
        { text: 'Incomplete Abstractions', link: '/girish/abstractions/incomplete-abstractions' },
        { text: 'Multifaceted Abstractions', link: '/girish/abstractions/multifaceted-abstractions' },
        { text: 'Unnecessary Abstractions', link: '/girish/abstractions/unnecessary-abstractions' },
        { text: 'Unitilized Abstractions', link: '/girish/abstractions/unitilized-abstractions' },
        { text: 'Duplicate Abstractions', link: '/girish/abstractions/duplicate-abstractions' },
      ]
    },
    {
      text: 'Abstraction Smells',
      collapsible: true,
      items: [
        { text: 'Missing Abstractions', link: '/girish/abstractions/missing-abstractions' },
        { text: 'Imperative Abstractions', link: '/girish/abstractions/imperative-abstractions' },
        { text: 'Incomplete Abstractions', link: '/girish/abstractions/incomplete-abstractions' },
        { text: 'Multifaceted Abstractions', link: '/girish/abstractions/multifaceted-abstractions' },
        { text: 'Unnecessary Abstractions', link: '/girish/abstractions/unnecessary-abstractions' },
        { text: 'Unitilized Abstractions', link: '/girish/abstractions/unitilized-abstractions' },
        { text: 'Duplicate Abstractions', link: '/girish/abstractions/duplicate-abstractions' },
      ]
    },
  ]
}