export function summaryBuilder(link: string,title : string) {
  const cardPayload = {
    cardsV2: [
      {
        cardId: "summary-card-button-" + Date.now(),
        card: {
          sections: [
            {
              header: `<b>Summary</b>: ${title}`,
              collapsible: false,
              uncollapsibleWidgetsCount: 1,
              widgets: [
                {
                  textParagraph: {
                    text: `Your requested summary about <b><i>${title}</i></b> is ready. Please review it with the button below`,
                  },
                },
                {
                  buttonList: {
                    buttons: [
                      {
                        text: "View Summary",
                        color: {
                          red: 0,
                          green: 0.5,
                          blue: 1,
                          alpha: 1,
                        },
                        onClick: {
                          openLink: {
                            url: `${link}`,
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          ],
          // Remove the fixedFooter section
        },
      },
    ],
  };
  return cardPayload;
}
