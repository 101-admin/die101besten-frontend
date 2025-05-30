export const navbarQuery = `*[_type == "navbar" && language == $language] {
    _id,
    _type,
    language,
    edition,
    "logo": logo.asset->url,
    mainMenu[] {
      label,
      url,
      hasSubmenu,
      submenu {
        columns[] {
          columnTitle,
          links[] {
            label,
            url,
            id
          }
        }
      }
    },
    utilities {
      search {
        placeholder
      },
      languageSelector {
        languages[] {
          code,
          label
        }
      }
    }
  }`;

export const footerQuery = `*[_type == "footer" && language == $language] {
    _id,
      _type,
      language,
      edition,
      "logo": logo.asset->url,
      kontakt {
        title,
        description,
        emailText,
        emailLink
      },
      service {
        title,
        links[] {
          label,
          url,
          newTab
        }
      },
      quickLinks {
        title,
        links[] {
          label,
          url,
          newTab
        }
      },
      ausDer101Welt {
        title,
        links[] {
          label,
          url,
          newTab
        }
      },
      bottomSection {
        copyright,
        legalLinks[] {
          label,
          url,
          newTab
        }
      }
    }`;
