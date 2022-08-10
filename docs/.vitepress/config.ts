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
        { text: 'Tentang Girish', link: '/girish/' },
      ]
    },
    {
      text: 'Hierarchy Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/hierarchy/' },
        { text: 'Missing Hierarchy', link: '/girish/hierarchy/missing-hierarchy' },
        { text: 'Unnecessary Hierarchy', link: '/girish/hierarchy/unnecessary-hierarchy' },
        { text: 'Unfactored Hierarchy', link: '/girish/hierarchy/unfactored-hierarchy' },
        { text: 'Wide Hierarchy', link: '/girish/hierarchy/wide-hierarchy' },
        { text: 'Speculative Hierarchy', link: '/girish/hierarchy/speculative-hierarchy' },
        { text: 'Deep Hierarchy', link: '/girish/hierarchy/deep-hierarchy' },
        { text: 'Rebellious Hierarchy', link: '/girish/hierarchy/rebellious-hierarchy' },
        { text: 'Broken Hierarchy', link: '/girish/hierarchy/broken-hierarchy' },
        { text: 'Multipath Hierarchy', link: '/girish/hierarchy/multipath-hierarchy' },
        { text: 'Cyclic Hierarchy', link: '/girish/hierarchy/cyclic-hierarchy' },
      ]
    },
    {
      text: 'Abstraction Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/abstraction/' },
        { text: 'Missing Abstractions', link: '/girish/abstraction/missing-abstractions' },
        { text: 'Imperative Abstractions', link: '/girish/abstraction/imperative-abstractions' },
        { text: 'Incomplete Abstractions', link: '/girish/abstraction/incomplete-abstractions' },
        { text: 'Multifaceted Abstractions', link: '/girish/abstraction/multifaceted-abstractions' },
        { text: 'Unnecessary Abstractions', link: '/girish/abstraction/unnecessary-abstractions' },
        { text: 'Unitilized Abstractions', link: '/girish/abstraction/unitilized-abstractions' },
        { text: 'Duplicate Abstractions', link: '/girish/abstraction/duplicate-abstractions' },
      ]
    },
    {
      text: 'Encapsulation Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/encapsulation/' },
        { text: 'Deficient Encapsulation', link: '/girish/encapsulation/missing-encapsulation' },
        { text: 'Leaky Encapsulation', link: '/girish/encapsulation/leaky-encapsulation' },
        { text: 'Missing Encapsulation', link: '/girish/encapsulation/missing-encapsulation' },
        { text: 'Unexploited Encapsulation', link: '/girish/encapsulation/unexploited-encapsulation' },
      ]
    },
    {
      text: 'Modularization Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/modularization/' },
        { text: 'Broken Modularization', link: '/girish/modularization/broken-modularization' },
        { text: 'Insufficient Modularization', link: '/girish/modularization/insufficient-modularization' },
        { text: 'Cyclically-dependent Modularization', link: '/girish/modularization/cyclically-dependent-modularization' },
        { text: 'Hub-like Modularization', link: '/girish/modularization/hub-like-modularization' },
      ]
    },
  ]
}