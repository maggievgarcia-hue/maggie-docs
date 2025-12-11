/**
 * Sidebar for Maggie's Writing Portfolio
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Writing Samples',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'writing-samples',
          label: 'Overview of Samples',
        },
        {
          type: 'doc',
          id: 'getting-started-guide',
          label: 'Getting Started Guide',
        },
        {
          type: 'doc',
          id: 'troubleshooting-common-issues',
          label: 'Troubleshooting Guide',
        },
        {
          type: 'doc',
          id: 'editing-example',
          label: 'Editing Sample (Before & After)',
        },
      ],
    },
  ],
};
