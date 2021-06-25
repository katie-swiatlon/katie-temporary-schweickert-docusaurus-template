module.exports = {
  title: "Schweickert",
  tagline: "Schweickert Webhelp",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg", // No favicon provided
  organizationName: "Schweickert", // Usually your GitHub org/user name.
  projectName: "schweickert-docusaurus-template", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Schweickert",
      logo: {
        alt: "Schweickert Logo",
        src: "img/Schweickert_Logo-Balken_rgb.svg",
      },
    },
    hideableSidebar: true, // Remove to hide the left pane
    //sidebarCollapsible: false, // Remove to disable the left-pane collapse/expand button
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Schweickert, Inc.`,
    },
    // The following determines the dark/light mode switch styling
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: "\u{25CB}",
        darkIcon: "\u{25CF}",
        darkIconStyle: {
          color: `#f4f4f4`,
        },
        lightIconStyle: {
          color: `#f4f4f4`,
        },
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        pages: false,
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // indexDocs: true,
        docsRouteBasePath: "/",
        // indexDocSidebarParentCategories: 3,
        // indexPages: false,
        // language: "en",
      },
    ],
  ],
};
