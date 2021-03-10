import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import estonia from "../images/svg/eesti_lipp.svg"
import unitedkingdom from "../images/svg/uk_lipp.svg"

const languageName = {
  en: "English",
  et: "Eesti"
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
                href="#!"
              key={language}
              onClick={e => {
                  e.preventDefault()
                  changeLocale(language)
                  return false;
                }}
              style={{
                backgroundColor: currentLocale === language ? `#f73d13` : `transparent`,
                margin: 5,
                paddingLeft: 5,
                paddingRight: 5,
                textDecoration: `none`,
                textAlign: `center`,
                cursor: `pointer`,
                display: `flex`,
                flexDirection: `column`
              }}
            >
                <img src={(languageName[language] === "Eesti") ? estonia : unitedkingdom} style={{height: 30, objectPosition: "0 0"}}></img>
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
