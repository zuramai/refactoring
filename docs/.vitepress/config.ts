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
    {
      text: 'Panduan',
      items: [
        { text: 'Tentang Martin Fowler', link: '/martin-fowler/' },
      ]
    },
    {
      text: 'Dispensables',
      items: [
        { text: 'Tentang Dispensables', link: '/martin-fowler/dispensables/' },
        { text: 'Comments', link: '/martin-fowler/dispensables/comments/' },
        { text: 'Duplicate Code', link: '/martin-fowler/dispensables/duplicate-code/' },
        { text: 'Lazy Class', link: '/martin-fowler/dispensables/lazy-class/' },
        { text: 'Data Class', link: '/martin-fowler/dispensables/data-class/' },
        { text: 'Dead Code', link: '/martin-fowler/dispensables/dead-code/' },
        { text: 'Speculative Generality', link: '/martin-fowler/dispensables/speculative-generality/' },
      ]
    },
    {
      text: 'Bloaters',
      items: [
        { text: 'Tentang Bloaters', link: '/martin-fowler/bloaters/' },
        { text: 'Long Method', link: '/martin-fowler/bloaters/long-method/' },
        { text: 'Large Class', link: '/martin-fowler/bloaters/large-class/' },
        { text: 'Primitive Obsession', link: '/martin-fowler/bloaters/primitive-obsession/' },
        { text: 'Long Parameter List', link: '/martin-fowler/bloaters/long-parameter-list/' },
        { text: 'Data Clumps', link: '/martin-fowler/bloaters/data-clumps/' },
      ]
    },
    {
      text: 'Change Preventers',
      items: [
        { text: 'Tentang Change Preventers', link: '/martin-fowler/change-preventers/' },
        { text: 'Divergent Change', link: '/martin-fowler/change-preventers/divergent-change/' },
        { text: 'Parallel Inheritance Hierarchies', link: '/martin-fowler/change-preventers/parallel-inheritance-hierarchies/' },
        { text: 'Shotgun Surgery', link: '/martin-fowler/change-preventers/shotgun-surgery/' },
      ]
    },
    {
      text: 'Object-Orientation Abusers',
      items: [
        { text: 'Tentang Object-Orientation Abusers', link: '/martin-fowler/oo-abusers/' },
        { text: 'Switch Statements', link: '/martin-fowler/oo-abusers/switch-statements/' },
        { text: 'Temporary Field', link: '/martin-fowler/oo-abusers/temporary-field/' },
        { text: 'Refused Bequest', link: '/martin-fowler/oo-abusers/refused-bequest/' },
        { text: 'Alternative Classes with Different Interfaces', link: '/martin-fowler/oo-abusers/alternative-classes/' },
      ]
    },
    {
      text: 'Couplers',
      items: [
        { text: 'Tentang Couplers', link: '/martin-fowler/couplers/' },
        { text: 'Feature Envy', link: '/martin-fowler/couplers/feature-envy/' },
        { text: 'Inappropriate Intimacy', link: '/martin-fowler/couplers/inappropriate-intimacy/' },
        { text: 'Message Chains', link: '/martin-fowler/couplers/message-chains/' },
        { text: 'Middle Man', link: '/martin-fowler/couplers/middle-man/' },
      ]
    },
  ]
}

function sidebarGirish() {
  return [
    {
      text: 'Panduan',
      items: [
        { text: 'Tentang Girish', link: '/girish/' },
      ]
    },
    {
      text: 'Hierarchy Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/hierarchy/' },
        { text: 'Missing Hierarchy', link: '/girish/hierarchy/missing-hierarchy/' },
        { text: 'Unnecessary Hierarchy', link: '/girish/hierarchy/unnecessary-hierarchy/' },
        { text: 'Unfactored Hierarchy', link: '/girish/hierarchy/unfactored-hierarchy/' },
        { text: 'Wide Hierarchy', link: '/girish/hierarchy/wide-hierarchy/' },
        { text: 'Speculative Hierarchy', link: '/girish/hierarchy/speculative-hierarchy/' },
        { text: 'Deep Hierarchy', link: '/girish/hierarchy/deep-hierarchy/' },
        { text: 'Rebellious Hierarchy', link: '/girish/hierarchy/rebellious-hierarchy/' },
        { text: 'Broken Hierarchy', link: '/girish/hierarchy/broken-hierarchy/' },
        { text: 'Multipath Hierarchy', link: '/girish/hierarchy/multipath-hierarchy/' },
        { text: 'Cyclic Hierarchy', link: '/girish/hierarchy/cyclic-hierarchy/' },
      ]
    },
    {
      text: 'Abstraction Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/abstraction/' },
        { text: 'Missing Abstractions', link: '/girish/abstraction/missing-abstractions/' },
        { text: 'Imperative Abstractions', link: '/girish/abstraction/imperative-abstractions/' },
        { text: 'Incomplete Abstractions', link: '/girish/abstraction/incomplete-abstractions/' },
        { text: 'Multifaceted Abstractions', link: '/girish/abstraction/multifaceted-abstractions/' },
        { text: 'Unnecessary Abstractions', link: '/girish/abstraction/unnecessary-abstractions/' },
        { text: 'Unitilized Abstractions', link: '/girish/abstraction/unitilized-abstractions/' },
        { text: 'Duplicate Abstractions', link: '/girish/abstraction/duplicate-abstractions/' },
      ]
    },
    {
      text: 'Encapsulation Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/encapsulation/' },
        { text: 'Deficient Encapsulation', link: '/girish/encapsulation/missing-encapsulation/' },
        { text: 'Leaky Encapsulation', link: '/girish/encapsulation/leaky-encapsulation/' },
        { text: 'Missing Encapsulation', link: '/girish/encapsulation/missing-encapsulation/' },
        { text: 'Unexploited Encapsulation', link: '/girish/encapsulation/unexploited-encapsulation/' },
      ]
    },
    {
      text: 'Modularization Smells',
      collapsible: true,
      items: [
        { text: 'Tentang', link: '/girish/modularization/' },
        { text: 'Broken Modularization', link: '/girish/modularization/broken-modularization/' },
        { text: 'Insufficient Modularization', link: '/girish/modularization/insufficient-modularization/' },
        { text: 'Cyclically-dependent Modularization', link: '/girish/modularization/cyclically-dependent-modularization/' },
        { text: 'Hub-like Modularization', link: '/girish/modularization/hub-like-modularization/' },
      ]
    },
  ]
}